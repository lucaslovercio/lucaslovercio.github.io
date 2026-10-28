/* =====================================================================
   SITE CONTENT
   ---------------------------------------------------------------------
   Everything shown on the page lives in this file. To add a repository,
   copy one block inside `repos`, change the fields and save. To add a
   paper, do the same inside `publications`. No build step needed.
   ===================================================================== */

window.SITE = {

  /* -------------------------------------------------------------- */
  profile: {
    name: "Lucas D. Lo Vercio, Ph.D.",
    role: "Specialist, Machine Learning in Medical Imaging",
    affiliation: "Alberta Children's Hospital Research Institute (ACHRI) · University of Calgary",
    photo: "assets/photo.jpg", // e.g. "assets/photo.jpg" — leave empty to hide
    updated: "October 2026",
    underConstruction: true,
    bio: [
      "I am a computer scientist with a background in mathematics, working on biomedical image analysis and machine learning. At ACHRI I build image-analysis pipelines for research labs, from fluorescence microscopy to histology. Over the past decade I have worked on intravascular and carotid ultrasound, developmental biology and satellite imagery."
    ],
    education: [
      "Ph.D. in Computational and Industrial Mathematics — UNCPBA, Argentina (2017)",
      "Systems Engineer — UNCPBA, Argentina (2011)"
    ],
    links: [
      { label: "GitHub",       icon: "github",       url: "https://github.com/lucaslovercio" },
      { label: "LinkedIn",     icon: "linkedin",     url: "https://www.linkedin.com/in/lucas-lo-vercio/" },
      { label: "ResearchGate", icon: "researchgate", url: "https://www.researchgate.net/profile/Lucas-Lo-Vercio" },
      { label: "X",            icon: "x",            url: "https://x.com/lovercio_lucas" }
    ]
  },

  /* -------------------------------------------------------------- */
  /* Sections. `group: "research"` goes under "Research areas";
     `group: "teaching"` gets its own section further down.          */
  areas: [
    {
      id: "microscopy",
      group: "research",
      title: "Microscopy & developmental biology",
      blurb: "Deep-learning segmentation, registration and quantification of light-sheet and fluorescence microscopy, and the data infrastructure behind it. University of Calgary."
    },
    {
      id: "ultrasound",
      group: "research",
      title: "Cardiovascular ultrasound",
      blurb: "Segmentation and measurement of the vessel wall in intravascular (IVUS) and carotid ultrasound. My Ph.D. work at PLADEMA (UNCPBA–CONICET, Argentina)."
    },
    {
      id: "remote",
      group: "research",
      title: "Remote sensing & satellite imagery",
      blurb: "Machine learning on Landsat and radar data for environmental monitoring."
    },
    {
      id: "teaching",
      group: "teaching",
      title: "Teaching & workshops",
      blurb: "Hands-on material from workshops on image processing and cell segmentation."
    }
  ],

  /* -------------------------------------------------------------- */
  /* Repositories.
     area:   one of the area ids above
     tags:   techniques; they become the filter chips at the top
     papers: keys from `publications` below (shown as links on the card)
     thumb:  optional image path, e.g. "assets/thumbs/ivus.png"
             (16:9 works best). Leave "" for the default illustration.
     note:   optional one-line remark                                 */
  repos: [
    {
      name: "IVUSprocessing",
      url: "https://github.com/lucaslovercio/IVUSprocessing",
      area: "ultrasound",
      description: "Classification and segmentation of the vessel wall in intravascular ultrasound: feature selection, SVM layer classification, Random Forest detection of morphological structures and lumen / media-adventitia contours.",
      language: "MATLAB",
      tags: ["SVM", "Random Forest", "Feature selection", "Imbalanced data", "Segmentation"],
      papers: ["ijcars2016", "spie2017rf", "cmpb2019"],
      thumb: "assets/thumbs/IVUS_Fourier1376.png",
      note: "Ph.D. thesis"
    },
    {
      name: "cimtool",
      url: "https://github.com/manterolaluis/cimtool",
      area: "ultrasound",
      description: "Interactive tool for measuring carotid intima-media thickness and lumen diameter, validated with low-cost phantoms and used for reference intervals in a healthy Argentinean population.",
      language: "MATLAB",
      tags: ["Segmentation", "Thickness measurement"],
      papers: ["umb2018", "ijh2018", "spie2017phantoms"],
      thumb: "assets/thumbs/phantoms.png",
      note: "Co-developed with H. L. Manterola"
    },
    {
      name: "LSMprocessing",
      url: "https://github.com/lucaslovercio/LSMprocessing",
      area: "microscopy",
      description: "Light-sheet microscopy pipeline for mouse embryos: CNN segmentation of tissues, nuclei and proliferating cells, groupwise registration and proliferation atlases by age.",
      language: "Python",
      tags: ["CNNs", "U-Net", "Segmentation", "Image registration"],
      papers: ["ieee2022", "dev2025"],
      thumb: "assets/thumbs/lsfm.png",
      note: ""
    },
    {
      name: "ACHRI_Workshop_Cellpose",
      url: "https://github.com/lucaslovercio/ACHRI_Workshop_Cellpose",
      area: "microscopy",
      description: "Scripts to segment and quantify cells with Cellpose (area, perimeter, eccentricity, compactness) and to re-train models, selecting the best one by Aggregated Jaccard Index.",
      language: "Python",
      tags: ["Cellpose", "CNNs", "Segmentation", "Quantification"],
      papers: [],
      thumb: "assets/thumbs/cellpose_workshop.png",
      note: ""
    },
    {
      name: "BHlab-Metadata-DB",
      url: "https://github.com/lucaslovercio/BHlab-Metadata-DB",
      area: "microscopy",
      description: "Relational database that keeps the metadata of the imaging scans of the Hallgrímsson lab.",
      language: "SQL",
      tags: ["Databases", "Data management"],
      papers: [],
      thumb: "assets/thumbs/database_diagram_20230413.png",
      note: ""
    },
    {
      name: "lumberjack_qgis_plugin",
      url: "https://github.com/carobrus/lumberjack_qgis_plugin",
      area: "remote",
      description: "QGIS plugin that corrects radar digital elevation models by detecting trees in Landsat imagery with machine learning.",
      language: "Python",
      tags: ["Random Forest", "Landsat", "QGIS"],
      papers: ["cai2020"],
      thumb: "assets/thumbs/lumberjack_roll_dem_mask2.png",
      note: "By C. Bruscantini"
    },
    {
      name: "WorkshopImageProcessing",
      url: "https://github.com/lucaslovercio/WorkshopImageProcessing",
      area: "teaching",
      description: "Introduction to automatic image processing for McCaig Institute trainees, with graphical tools and programming libraries: filtering and segmentation with 3D Slicer, ParaView, ITK and Python.",
      language: "Python",
      tags: ["Segmentation", "3D Slicer", "ITK"],
      papers: [],
      thumb: "assets/thumbs/image_processing.png",
      note: "University of Calgary, 2022"
    },
    {
      name: "QSW2026-CellposeLab",
      url: "https://github.com/lucaslovercio/QSW2026-CellposeLab",
      area: "teaching",
      description: "Cellpose lab for QSW 2026: from a pre-trained nuclei model to re-trained models on fluorescence images, ready to run in Google Colab.",
      language: "Python",
      tags: ["Cellpose", "Segmentation"],
      papers: [],
      thumb: "assets/thumbs/qsw_4.png",
      note: "University of Calgary, May 2026"
    },
    {
      name: "SpinalCordAnalysis",
      url: "https://github.com/lucaslovercio/SpinalCordAnalysis",
      area: "microscopy",
      description: "Spinal cord analysis: thickness and gene expression",
      language: "MATLAB",
      tags: ["Segmentation", "Thickness measurement"],
      papers: [],
      thumb: "",
      note: "Based on cimtool"
    }
  ],

  /* -------------------------------------------------------------- */
  /* Publications.
     type: "journal" | "tutorial" | "conference"
     doi:  without the https://doi.org/ prefix. If empty, the title
           links to a Google Scholar search instead.
     Authors: use "Lo Vercio" so your name is highlighted.
     featured:  true → also listed under "Featured research" on Home
     highlight: optional one-liner shown with featured papers         */
  publications: [
    { key: "dauter", type: "journal", year: 2026,
      authors: "Dauter A, Malhi SK, Lo Vercio LD, et al., Hallgrímsson B",
      title: "Three-dimensional cellular dynamics and mandibular morphogenesis",
      venue: "Frontiers in Cell and Developmental Biology, 14", doi: "10.3389/fcell.2026.1823297" },
    { key: "jorspine2025", type: "journal", year: 2025,
      authors: "Bader TJ, Dhiman M, Lo Vercio L, Bouchard J, Nicholls F, et al.",
      title: "Reduced shear modulus and altered lamellar morphology of the outer annulus fibrosus in painful intervertebral disc degeneration compared with tissue from non-surgical controls",
      venue: "JOR Spine, 8(4)", doi: "10.1002/jsp2.70123" },

    { key: "dev2025", type: "journal", year: 2025,
      authors: "Lo Vercio LD‡, Green RM‡, Dauter A, Barretto EC, et al., Hallgrímsson B",
      title: "Quantifying the relationship between cell proliferation and morphology during development of the face",
      venue: "Development, 152(7)", doi: "10.1242/dev.204511",
      featured: true,
      highlight: "A light-sheet imaging and analysis pipeline that relates the 3D distribution of cell proliferation to facial shape across mouse development." },

    { key: "natcomms2023", type: "journal", year: 2023,
      authors: "Radford BN, Zhao X, Glazer T, et al., Lo Vercio LD, et al., Hemberger M",
      title: "Defects in placental syncytiotrophoblast cells are a common cause of developmental heart disease",
      venue: "Nature Communications, 14(1)", doi: "10.1038/s41467-023-36740-5" },

    { key: "ieee2022", type: "journal", year: 2022,
      authors: "Lo Vercio LD, Green RM, Robertson S, et al., Hallgrímsson B, Forkert ND",
      title: "Segmentation of tissues and proliferating cells in light-sheet microscopy images of mouse embryos using convolutional neural networks",
      venue: "IEEE Access, 10, 105084–105100", doi: "10.1109/access.2022.3210542",
      featured: true,
      highlight: "Convolutional neural networks that segment tissues, nuclei and proliferating cells in whole mouse embryos imaged with light-sheet microscopy." },

    { key: "scidata2022", type: "journal", year: 2022,
      authors: "Devine J, Vidal-García M, Liu W, Neves A, Lo Vercio LD, et al.",
      title: "MusMorph, a database of standardized mouse morphology data for morphometric meta-analyses",
      venue: "Scientific Data", doi: "10.1038/s41597-022-01338-x" },

    { key: "dev2021", type: "journal", year: 2021,
      authors: "Toussaint N, Redhead Y, Vidal-García M, Lo Vercio L, et al.",
      title: "A landmark-free morphometrics pipeline for high-resolution phenotyping: application to a mouse model of Down syndrome",
      venue: "Development, 148(18)", doi: "10.1242/dev.188631" },

    { key: "frontiers2021", type: "journal", year: 2021,
      authors: "Marchini M‡, Hu D‡, Lo Vercio L, Young NM, Forkert ND, Hallgrímsson B, Marcucio R",
      title: "Wnt signaling drives correlated changes in facial morphology and brain shape",
      venue: "Frontiers in Cell and Developmental Biology, 9", doi: "10.3389/fcell.2021.644099" },

    { key: "evolbio2020", type: "journal", year: 2020,
      authors: "Devine J, Aponte JD, Katz DC, Liu W, Lo Vercio LD, et al.",
      title: "A registration and deep learning approach to automated landmark detection for geometric morphometrics",
      venue: "Evolutionary Biology, 47, 246–259", doi: "10.1007/s11692-020-09508-8" },

    { key: "cmpb2019", type: "journal", year: 2019,
      authors: "Lo Vercio L, del Fresno M, Larrabide I",
      title: "Lumen-intima and media-adventitia segmentation in IVUS images using supervised classifications of arterial layers and morphological structures",
      venue: "Computer Methods and Programs in Biomedicine, 177, 113–121", doi: "10.1016/j.cmpb.2019.05.021",
      featured: true,
      highlight: "Fully automatic vessel-wall segmentation in intravascular ultrasound, combining supervised classification of arterial layers with deformable contours." },

    { key: "umb2018", type: "journal", year: 2018,
      authors: "Manterola HL, Lo Vercio L, Díaz A, del Fresno M, Larrabide I",
      title: "Validation of an open-source tool for measuring carotid lumen diameter and intima–media thickness",
      venue: "Ultrasound in Medicine & Biology, 44(8), 1873–1881", doi: "10.1016/j.ultrasmedbio.2018.04.001" },

    { key: "ijh2018", type: "journal", year: 2018,
      authors: "Diaz A, Bia D, Zócalo Y, Manterola H, Larrabide I, Lo Vercio L, del Fresno M, Cabrera Fischer E",
      title: "Carotid intima media thickness reference intervals for a healthy Argentinean population aged 11–81 years",
      venue: "International Journal of Hypertension", doi: "10.1155/2018/8086714" },

    { key: "ijcars2016", type: "journal", year: 2016,
      authors: "Lo Vercio L, Orlando JI, del Fresno M, Larrabide I",
      title: "Assessment of image features for vessel wall segmentation in intravascular ultrasound images",
      venue: "International Journal of Computer Assisted Radiology and Surgery, 11, 1397–1407", doi: "10.1007/s11548-015-1345-4" },

    { key: "jne2020", type: "tutorial", year: 2020,
      authors: "Lo Vercio L, Amador K, Bannister JJ, et al., Forkert ND",
      title: "Supervised machine learning tools: a tutorial for clinicians",
      venue: "Journal of Neural Engineering, 17(6)", doi: "10.1088/1741-2552/abbff2",
      featured: true,
      highlight: "An accessible introduction to supervised machine learning and deep learning for clinicians, with practical advice on designing a model for a medical problem." },

    { key: "cai2020", type: "conference", year: 2020,
      authors: "Bruscantini C, Lo Vercio L, Rinaldi P",
      title: "Correction of radar digital elevation models using Landsat imagery through machine learning (in Spanish)",
      venue: "Congreso Argentino de Agroinformática (CAI)", doi: "" },

    { key: "spie2017rf", type: "conference", year: 2017,
      authors: "Lo Vercio L, del Fresno M, Larrabide I",
      title: "Detection of morphological structures for vessel wall segmentation in IVUS using random forests",
      venue: "Proc. SPIE 10160, SIPAIM", doi: "10.1117/12.2255748" },

    { key: "spie2017phantoms", type: "conference", year: 2017,
      authors: "Manterola HL, Lo Vercio L, Díaz A, Pardini PA, Waks Serra MV, del Fresno M, Larrabide I",
      title: "Low-cost phantoms for validating measurements in ultrasound vascular images",
      venue: "Proc. SPIE 10160, SIPAIM", doi: "10.1117/12.2255750" },

    { key: "spie2015", type: "conference", year: 2015,
      authors: "D'Amato JP, Lo Vercio L, Rubi P, Fernandez Vera E, Barbuzza R, del Fresno M, Larrabide I",
      title: "Efficient scatter model for simulation of ultrasound images from computed tomography data",
      venue: "Proc. SPIE 9681, SIPAIM", doi: "10.1117/12.2205937" }
  ],

  teaching_courses: [
    {
      key: "qsw2026", role: "Guest lecturer", year: "2026",
      title: "Cellpose Lab", topics: "Cellpose, observer variability", university: "UCalgary"
    },
    {
      key: "mdsc68911", role: "Guest lecturer", year: "2023,2024",
      title: "Medical Imaging Applications", topics: "Image registration, Machine Learning", university: "UCalgary"
    },
    {
      key: "improcess", role: "Instructor", year: "2022",
      title: "Workshop: Introduction to Image Processing using Open-Source Software",
      topics: "Filtering. Segmentation. 3DSlicer, Paraview, ITK, Python", university: "UCalgary"
    },
    {
      key: "custodios", role: "Instructor", year: "2018",
      title: "Technological Applications for Conservation",
      topics: "GPS, Geographic Information Systems, Image Processing", university: "UNCPBA"
    },
    {
      key: "tim", role: "Teaching Assistant", year: "2014, 2015, 2017",
      title: "Medical Imaging workshop",
      topics: "Filtering, segmentation, quantification and registration of medical images", university: "UNCPBA"
    },
    {
      key: "metodologias", role: "Teaching Assistant", year: "2009-2018",
      title: "Software Development Methodologies I",
      topics: "UML, UP, Agile software development. IBM Professional Qualification RT011", university: "UNCPBA"
    },
    {
      key: "tio", role: "Teaching Assistant", year: "2016-2018",
      title: "Information Technologies for Organizations",
      topics: "Fundamentals of organizations, Business requirements, Git, CMMI", university: "UNCPBA"
    },
    {
      key: "compiladores", role: "Teaching Assistant", year: "2011-2019",
      title: "Design of Compilers I",
      topics: "Symbols tables, lexical and syntactic analysis, YACC, Assembly language", university: "UNCPBA"
    },
    {
      key: "estructuras-tupar", role: "Teaching Assistant", year: "2011",
      title: "Data Storage Structures",
      topics: "Data modeling (Entity-Relationship Diagrams, Normal Forms, Business Requirements) and data structures in secondary storage",
      university: "UNCPBA"
    },
  ]

};
