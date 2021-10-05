u1 = User.create(username: 'user1', password: 'password', email: 'user1@gmail.com', address: '567 Fake Address St', admin: true)
u2 = User.create(username: 'user2', password: 'password', email: 'user2@aol.com', address: '1234 Fake Address St', admin: true)

# cases
case_item_attributes = [
  {
    name: "Meshify C White",
    brand: "Fractal Design",
    price: 89.99,
    rating: 5,
    specs: "TG FD-CA-MESH-C-WT-TGC White Steel / Tempered Glass ATX Mid Tower High-Airflow Compact Clear Tempered Glass Computer Case",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/11-352-087-V01.jpg",
    category: "Case"
  },
  {
    name: "LANCOOL II",
    brand: "LIAN LI",
    price: 98.99,
    rating: 4,
    specs: "BLACK Tempered Glass ATX Case -Black Color -LANCOOL II -X - Water-Cooling Ready",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/AFSTS200218vzYKv.jpg",
    category: "Case"
  },
  {
    name: "H210i",
    brand: "NZXT",
    price: 112.99,
    rating: 5,
    specs: "Mini-ITX PC Gaming Case / Front I/O USB Type-C Port / Tempered Glass Side Panel Cable Management - Integrated RGB Lighting",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/11-146-312-V01.jpg",
    category: "Case"
  },
  {
    name: "Eclipse P400A",
    brand: "Phanteks",
    price: 74.99,
    rating: 4,
    specs: "PH-EC400ATG_BK01 Black Steel / Tempered Glass ATX Mid Tower Computer Case - Water-Cooling Ready",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/11-854-085-V01.jpg",
    category: "Case"
  },
  {
    name: "MasterCase H500",
    brand: "Cooler Master",
    price: 139.99,
    rating: 5,
    specs: "ARGB Airflow ATX Mid-Tower with Mesh and Transparent Front Panel Option, Dual 200mm ARGB Lighting Fans",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/11-119-350-V90.jpg",
    category: "Case"
  },
  {
    name: "Versa H18",
    brand: "Thermaltake",
    price: 54.99,
    rating: 3,
    specs: "Tempered Glass Black SPCC Micro ATX Gaming Computer Case CA-1J4-00S1WN-01",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/11-133-368-V12.jpg",
    category: "Case"
  }
]

# mb's
mb_item_attributes = [
  {
    name: "B550 AORUS PRO AC",
    brand: "GIGABYTE",
    price: 204.99,
    rating: 5,
    specs: "AM4 AMD B550 ATX Motherboard with Dual M.2, SATA 6Gb/s, USB 3.2 Gen 2, Intel 802.11ac, 2.5 GbE LAN, PCIe 4.0",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/13-145-216-V01.jpg",
    category: "Motherboard"
  },
  {
    name: "B550M STEEL LEGEND",
    brand: "ASRock",
    price: 139.99,
    rating: 4,
    specs: "AM4 AMD B550 SATA 6Gb/s Micro ATX AMD Motherboard",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/13-157-940-V01.jpg",
    category: "Motherboard"
  },
  {
    name: "MAG B550 TOMAHAWK",
    brand: "MSI",
    price: 189.99,
    rating: 5,
    specs: "AM4 AMD B550 SATA 6Gb/s ATX AMD Motherboard",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/13-144-326-V01.jpg",
    category: "Motherboard"
  },
  {
    name: "TUF GAMING B550M-ZAKU",
    brand: "ASUS",
    price: 199.99,
    rating: 2,
    specs: "(WI-FI) AM4 AMD B550 SATA 6Gb/s Micro ATX AMD Motherboard",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-469-07.jpg",
    category: "Motherboard"
  },
  {
    name: "X570 AORUS ELITE",
    brand: "GIGABYTE",
    price: 209.99,
    rating: 5,
    specs: "AMD Ryzen 3000 PCIe 4.0 SATA 6Gb/s USB 3.2 AMD X570 ATX Motherboard",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/13-145-160-V07.jpg",
    category: "Motherboard"
  },
  {
    name: "Z590 AORUS PRO AX",
    brand: "GIGABYTE",
    price: 259.99,
    rating: 3,
    specs: "LGA 1200 Intel Z590 ATX Motherboard with 4 x M.2, PCIe 4.0, USB 3.2 Gen2X2 Type-C, Intel WIFI 6, 2.5GbE LAN",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/13-145-268-V01.jpg",
    category: "Motherboard"
  }
]

# cpus
cpu_item_attributes = [
  {
    name: "Ryzen 7 5800X",
    brand: "AMD",
    price: 449.99,
    rating: 5,
    specs: "Ryzen 7 5000 Series Vermeer (Zen 3) 8-Core 3.8 GHz Socket AM4 105W Desktop Processor",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-665-V01.jpg",
    category: "CPU"
  },
  {
    name: "Core i7-11700K",
    brand: "Intel",
    price: 389.99,
    rating: 4,
    specs: "Core i7 11th Gen Rocket Lake 8-Core 3.6 GHz LGA 1200 125W Intel UHD Graphics 750 Desktop Processor - BX8070811700K",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-233-V01.jpg",
    category: "CPU"
  },
  {
    name: "Core i9-11900K",
    brand: "Intel",
    price: 549.99,
    rating: 5,
    specs: "Core i9 11th Gen Rocket Lake 8-Core 3.5 GHz LGA 1200 125W Intel UHD Graphics 750 Desktop Processor",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-231-V04.jpg",
    category: "CPU"
  },
  {
    name: "Athlon 3000G",
    brand: "AMD",
    price: 84.99,
    rating: 2,
    specs: "3.5GHz Dual-Core Unlocked OC AM4 Processor with Vega 3 Graphics",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/AN0MS200611PyH1c.jpg",
    category: "CPU"
  },
  {
    name: "Core i9-10900K",
    brand: "Intel",
    price: 499.99,
    rating: 4,
    specs: "Core i9 10th Gen Comet Lake 10-Core 3.7 GHz LGA 1200 125W Intel UHD Graphics 630 Desktop Processor",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-122-V16.jpg",
    category: "CPU"
  },
  {
    name: "Ryzen 9 5900X ",
    brand: "AMD",
    price: 559.99,
    rating: 3,
    specs: "Ryzen 9 5000 Series Vermeer (Zen 3) 12-Core 3.7 GHz Socket AM4 105W Desktop Processor",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-664-V01.jpg",
    category: "CPU"
  }
]

# gpus
gpu_item_attributes = [
  {
    name: "GeForce RTX 3080 Ti",
    brand: "EVGA",
    price: 1429.99,
    rating: 5,
    specs: "FTW3 ULTRA GAMING Video Card, 12G-P5-3967-KR, 12GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-487-547-V82.jpg",
    category: "GPU"
  },
  {
    name: "GeForce RTX 3060 Ti",
    brand: "ASUS",
    price: 499.99,
    rating: 4,
    specs: "8GB GDDR6 PCI Express 4.0 Video Card DUAL-RTX3060TI-8G",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-126-480-V11.jpg",
    category: "GPU"
  },
  {
    name: "GeForce RTX 3080 Ti",
    brand: "GIGABYTE",
    price: 1529.99,
    rating: 5,
    specs: "12GB GDDR6X PCI Express 4.0 ATX Video Card GV-N308TVISION OC-12GD",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-932-437-V06.jpg",
    category: "GPU"
  },
  {
    name: "RADEON RX 6900 XT",
    brand: "SAPPHIRE",
    price: 1649.99,
    rating: 5,
    specs: "OC Gaming Graphics Card WITH 16GB GDDR6, 11308-01-20G",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-202-395-01.jpg",
    category: "GPU"
  },
  {
    name: "Radeon RX 6900 XT",
    brand: "PowerColor ",
    price: 1799.99,
    rating: 4,
    specs: "Ultimate Gaming Graphics Card with 16GB GDDR6 Memory, Powered by AMD RDNA 2, HDMI 2.1",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-131-785-08.jpg",
    category: "GPU"
  },
  {
    name: "GeForce RTX 3070",
    brand: "GIGABYTE",
    price: 729.99,
    rating: 3,
    specs: "EAGLE OC 8GB Video Card, GV-N3070EAGLE OC-8GD",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-932-343-01.jpg",
    category: "GPU"
  }
]

# psus
psu_item_attributes = [
  {
    name: "RM650x",
    brand: "CORSAIR",
    price: 89.99,
    rating: 4,
    specs: "2018 CP-9020178-NA 650W ATX12V / EPS12V 80 PLUS GOLD Certified Full Modular Power Supply",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/17-139-232-V11.jpg",
    category: "Power Supply"
  },
  {
    name: "600 BQ",
    brand: "EVGA",
    price: 49.99,
    rating: 4,
    specs: "110-BQ-0600-K1 BQ 80 Plus Bronze Semi Modular 600W Power Supply",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/17-438-100-V08.jpg",
    category: "Power Supply"
  },
  {
    name: "SuperNOVA 750 G6",
    brand: "EVGA",
    price: 114.99,
    rating: 5,
    specs: "80 Plus Gold 750W, Fully Modular, Eco Mode with FDB Fan, 10 Year Warranty, Compact 140mm Size, Power Supply 220-G6-0750-X1",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/17-438-213-01.jpg",
    category: "Power Supply"
  },
  {
    name: "Master Watt 650W",
    brand: "Cooler Master",
    price: 74.99,
    rating: 3,
    specs: "Semi-Fanless Silencio Fan, Semi-Modular 80 PLUS Bronze Power Supply",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/17-171-113-V60.jpg",
    category: "Power Supply"
  },
  {
    name: "500 BA",
    brand: "EVGA",
    price: 29.99,
    rating: 2,
    specs: "100-BA-0500-K1 500W ATX12V / EPS12V SLI CrossFire 80 PLUS BRONZE Certified Non-Modular Active PFC Power Supply",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/17-438-188-V01.jpg",
    category: "Power Supply"
  },
  {
    name: "SYNCRO DGC-750",
    brand: "Seasonic",
    price: 179.99,
    rating: 5,
    specs: "750W 80+ Gold Power Supply, CONNECT Module Cable Management, SSR-750FA2, Use Case Q704 with Psu Syncro DGC-650 / DGC-750 / DPC-850",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/17-151-249-V01.jpg",
    category: "Power Supply"
  }
]

# ram
ram_item_attributes = [
  {
    name: "TridentZ",
    brand: "G.SKILL",
    price: 145.99,
    rating: 5,
    specs: "RGB Series 32GB (2 x 16GB) 288-Pin DDR4 SDRAM DDR4 3200 (PC4 25600) AMD 3000 Compatible Intel XMP 2.0 Desktop Memory",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-232-748-01.jpg",
    category: "RAM"
  },
  {
    name: "Ripjaws",
    brand: "G.SKILL",
    price: 79.99,
    rating: 4,
    specs: "V Series 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 3600 (PC4 28800) Intel XMP 2.0 Desktop Memory",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-232-880-V01.jpg",
    category: "RAM"
  },
  {
    name: "Vengeance LPX",
    brand: "CORSAIR",
    price: 154.99,
    rating: 4,
    specs: "32GB (2 x 16GB) 288-Pin DDR4 SDRAM DDR4 3600 (PC4 28800) Desktop Memory",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-236-678-01.jpg",
    category: "RAM"
  },
  {
    name: "OLOy 16GB",
    brand: "OLOy",
    price: 58.99,
    rating: 2,
    specs: "(2 x 8GB) 288-Pin DDR4 SDRAM DDR4 3200 (PC4 25600) Desktop Memory",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-821-353-S01.jpg",
    category: "RAM"
  },
  {
    name: "Ballistix",
    brand: "Crucial",
    price: 89.99,
    rating: 5,
    specs: "RGB 3200 MHz DDR4 DRAM Desktop Gaming Memory Kit 16GB (8GBx2)",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-164-224-01.jpg",
    category: "RAM"
  },
  {
    name: "Vengeance RGB Pro",
    brand: "CORSAIR",
    price: 149.99,
    rating: 5,
    specs: "32GB (2 x 16GB) 288-Pin DDR4 SDRAM DDR4 3600 (PC4 28800) Intel XMP 2.0 Desktop Memory",
    image: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-236-607-01.jpg",
    category: "RAM"
  }
]

case_item_attributes.map{|attrs| Item.create(attrs)}
mb_item_attributes.map{|attrs| Item.create(attrs)}
cpu_item_attributes.map{|attrs| Item.create(attrs)}
gpu_item_attributes.map{|attrs| Item.create(attrs)}
psu_item_attributes.map{|attrs| Item.create(attrs)}
ram_item_attributes.map{|attrs| Item.create(attrs)}
  
