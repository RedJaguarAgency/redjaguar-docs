#!/usr/bin/env python3
"""Busca la traducción de textos de la interfaz en un .po.

Uso: bin/po-lookup.py <archivo.po> <texto> [<texto>...]
Busca coincidencias exactas del msgid; si no hay, las que lo contienen.
"""
import re, sys

def parse(path):
    entries, cur, key = {}, {}, None
    def flush():
        if 'msgid' in cur and cur.get('msgid'):
            entries[cur['msgid']] = cur.get('msgstr', '') or cur.get('msgstr[0]', '')
    for line in open(path, encoding='utf-8'):
        line = line.rstrip('\n')
        m = re.match(r'^(msgctxt|msgid|msgid_plural|msgstr(?:\[\d\])?) "(.*)"$', line)
        if m:
            if m.group(1) in ('msgid', 'msgctxt') and 'msgid' in cur and m.group(1) == 'msgid' or m.group(1) == 'msgctxt':
                flush(); cur = {}
            key = m.group(1); cur[key] = m.group(2); continue
        m = re.match(r'^"(.*)"$', line)
        if m and key:
            cur[key] += m.group(1); continue
        if not line.strip():
            flush(); cur = {}; key = None
    flush()
    return {k.encode().decode('unicode_escape').encode('latin1').decode('utf-8'): v.encode().decode('unicode_escape').encode('latin1').decode('utf-8') for k, v in entries.items()}

po = parse(sys.argv[1])
for q in sys.argv[2:]:
    if q in po:
        print(f'{q}  =>  {po[q]}')
    else:
        hits = [(k, v) for k, v in po.items() if q.lower() in k.lower()][:5]
        print(f'{q}  =>  ' + (' | '.join(f'[{k}] {v}' for k, v in hits) if hits else '(sin traducción)'))
