import sys, json, os

data = json.load(sys.stdin)
for path, content in data.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Generated:', path)
