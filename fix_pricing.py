import re

# Read the file
with open('src/components/Pricing.jsx', 'r') as f:
    content = f.read()

# Remove the import line
content = content.replace('import TrustBadges from "./TrustBadges";\n', '')

# Remove the component usage (all variations of whitespace)
content = re.sub(r'\s*\{/\* Trust Badges \*/\}\n\s*<TrustBadges />\n\n', '', content)

# Write back
with open('src/components/Pricing.jsx', 'w') as f:
    f.write(content)

print('✓ Removed TrustBadges import')
print('✓ Removed TrustBadges component')
