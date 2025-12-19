import os
import sys
import glob

# specific path from previous warning
user_site = os.path.expanduser('~/Library/Python/3.9/lib/python/site-packages')
if user_site not in sys.path:
    sys.path.append(user_site)

try:
    from fonttools.subset import main as subset_main
except ImportError:
    print("Could not import fonttools.subset. Please check installation.")
    sys.exit(1)

font_dir = '/Users/oliver/Desktop/Repos/oliver-engel.github.io/assets/fonts'
otf_files = glob.glob(os.path.join(font_dir, 'MerloOriginalTrial-*.otf'))

if not otf_files:
    print("No OTF files found!")
    sys.exit(0)

print(f"Found {len(otf_files)} OTF files.")

for otf in otf_files:
    woff2_path = otf.replace('.otf', '.woff2')
    print(f"Converting {os.path.basename(otf)} to woff2...")
    
    # Simulate arguments for command line tool
    args = [
        otf,
        f'--output-file={woff2_path}',
        '--flavor=woff2',
        '--layout-features=*'
    ]
    
    try:
        subset_main(args)
        print(f"Successfully created {os.path.basename(woff2_path)}")
    except Exception as e:
        print(f"Failed to convert {otf}: {e}")
