import json, pathlib, sys

PIN_NAME = "xoctave"
PIN_DISPLAY = "Octave (xeus)"

changed = 0
for p in pathlib.Path(".").rglob("*.ipynb"):
    nb = json.loads(p.read_text(encoding="utf-8"))
    ks = nb.setdefault("metadata", {}).setdefault("kernelspec", {})
    if ks.get("name") != PIN_NAME:
        ks["name"] = PIN_NAME
        ks["display_name"] = PIN_DISPLAY
        p.write_text(json.dumps(nb, ensure_ascii=False, indent=1), encoding="utf-8")
        print("Pinned:", p)
        changed += 1

print(f"Updated {changed} notebook(s).")
