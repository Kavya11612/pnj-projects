import re
import urllib.request
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "public" / "pnj-media"
OUT.mkdir(parents=True, exist_ok=True)

# Distinct, category-correct Unsplash images (stable source IDs)
DOWNLOADS = {
    # Plots / layouts — green developed plots, aerial roads, gated layout land
    "plot-01.jpg": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    "plot-02.jpg": "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1400&q=80",
    "plot-03.jpg": "https://images.unsplash.com/photo-1449843481927-6161bd50e3e3?auto=format&fit=crop&w=1400&q=80",
    "plot-04.jpg": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=80",
    "plot-05.jpg": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1400&q=80",
    "plot-06.jpg": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
    "plot-07.jpg": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    "plot-08.jpg": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80",
    "plot-09.jpg": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=80",
    "plot-10.jpg": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    "plot-11.jpg": "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1400&q=80",
    "plot-12.jpg": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
    "plot-13.jpg": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
    # Apartments — towers / multi-storey residential
    "apt-01.jpg": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    "apt-02.jpg": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    "apt-03.jpg": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    "apt-04.jpg": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    "apt-05.jpg": "https://images.unsplash.com/photo-1580216643062-cf3405180963?auto=format&fit=crop&w=1400&q=80",
    "apt-06.jpg": "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    "apt-07.jpg": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80",
    "apt-08.jpg": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
    "apt-09.jpg": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
    "apt-10.jpg": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
    "apt-11.jpg": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
    "apt-12.jpg": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    # Villas — luxury homes / gated villa exteriors
    "villa-01.jpg": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
    "villa-02.jpg": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    "villa-03.jpg": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    "villa-04.jpg": "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd00?auto=format&fit=crop&w=1400&q=80",
    "villa-05.jpg": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
    "villa-06.jpg": "https://images.unsplash.com/photo-1600573472592-401b489a3cd8?auto=format&fit=crop&w=1400&q=80",
    "villa-07.jpg": "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1400&q=80",
    "villa-08.jpg": "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1400&q=80",
    "villa-09.jpg": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    "villa-10.jpg": "https://images.unsplash.com/photo-1512915922683-107c8ff4c4c6?auto=format&fit=crop&w=1400&q=80",
}

# Prefer PNJ site assets when available
PNJ = {
    "marvella.jpg": "https://pnjprojects.com/wp-content/uploads/2023/11/marvella.jpg",
    "beamSlide1.jpg": "https://pnjprojects.com/wp-content/uploads/2023/11/beamSlide1.jpg",
    "high9-1.jpg": "https://pnjprojects.com/wp-content/uploads/2023/11/high9-1.jpg",
    "pnjTwinslide.jpg": "https://pnjprojects.com/wp-content/uploads/2023/11/pnjTwinslide.jpg",
    "kotas.jpg": "https://pnjprojects.com/wp-content/uploads/2023/11/kotas.jpg",
    "slide1-1.jpg": "https://pnjprojects.com/wp-content/uploads/2023/11/slide1-1.jpg",
    "Entrance_day_02-min-1.jpg": "https://pnjprojects.com/wp-content/uploads/2023/11/Entrance_day_02-min-1.jpg",
    "Exterior_Cam_16-min-1.jpg": "https://pnjprojects.com/wp-content/uploads/2023/11/Exterior_Cam_16-min-1.jpg",
    "dukes-1.jpg": "https://pnjprojects.com/wp-content/uploads/2023/11/dukes-1.jpg",
}


def fetch(name: str, url: str) -> None:
    dest = OUT / name
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=40) as r:
            data = r.read()
        if len(data) < 5000:
            print("SKIP small", name, len(data))
            return
        dest.write_bytes(data)
        print("OK", name, len(data))
    except Exception as e:
        print("FAIL", name, e)


def main() -> None:
    for name, url in {**PNJ, **DOWNLOADS}.items():
        if name in DOWNLOADS or not (OUT / name).exists() or (OUT / name).stat().st_size < 20000:
            fetch(name, url)
        else:
            print("KEEP", name)


if __name__ == "__main__":
    main()
