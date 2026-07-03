export type ProjectSections = {
  problem: string;
  method: string;
  result: string;
  role: string;
};

export type VisualHighlight = {
  title: string;
  description: string;
  image?: string;
};

export type Project = {
  slug: string;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  positioning: string;
  tags: string[];
  coverImage: string;
  video: string;
  gallery: string[];
  href: string;
  category: string;
  accent: string;
  sections: ProjectSections;
  highlights: string[];
  visualHighlights: VisualHighlight[];
};

export const projects: Project[] = [
  {
    slug: "gi-lesion-detection",
    title: "Gastrointestinal Lesion Detection",
    titleZh: "胃肠道病灶识别",
    summary:
      "Capsule endoscopy lesion detection, multi-class recognition, and hard negative optimization.",
    summaryZh: "胶囊内镜病灶检测、多类别识别、hard negative优化。",
    positioning:
      "Capsule endoscopy lesion detection system for multi-class lesion recognition and clinical review support.",
    tags: ["Detection", "YOLO", "Capsule Endoscopy", "Medical AI"],
    coverImage: "/images/projects/lesion-detection-cover.jpg",
    video: "/videos/projects/lesion-detection-demo.webm",
    gallery: [
      "/images/projects/lesion-detection-01.jpg",
      "/images/projects/lesion-detection-02.jpg",
      "/images/projects/lesion-detection-03.jpg"
    ],
    href: "/projects/gi-lesion-detection",
    category: "Detection",
    accent: "from-cyan-300 to-blue-400",
    sections: {
      problem:
        "Capsule endoscopy produces thousands of frames per case. Lesions can be small, blurred, partially occluded, or visually similar to normal mucosa.",
      method:
        "Built a detection pipeline for multi-class lesion recognition, including data cleaning, hard negative mining, model training, threshold tuning, and error analysis.",
      result:
        "The system highlights suspicious lesion frames and supports downstream representative frame selection and structured reporting.",
      role:
        "Data strategy, annotation quality control, model training, hard negative optimization, validation analysis, and clinical-facing visualization."
    },
    highlights: [
      "Multi-class lesion detection",
      "Hard negative optimization",
      "Representative frame selection",
      "Clinical review support"
    ],
    visualHighlights: [
      {
        title: "Detection overlay",
        description: "Bounding boxes surface suspicious frames for review.",
        image: "/images/projects/lesion-detection-01.jpg"
      },
      {
        title: "Multi-class lesions",
        description: "Visual grouping across lesion categories.",
        image: "/images/projects/lesion-detection-02.jpg"
      },
      {
        title: "Hard negatives",
        description: "Normal-like frames used to reduce false positives.",
        image: "/images/projects/lesion-detection-03.jpg"
      },
      {
        title: "Clinical review",
        description: "Representative frames prepared for reporting.",
        image: "/images/projects/lesion-detection-cover.jpg"
      }
    ]
  },
  {
    slug: "gastric-anatomy-segmentation",
    title: "Gastric Anatomy Segmentation",
    titleZh: "胃部解剖部位分割",
    summary:
      "Gastric region segmentation, anatomical timeline modeling, and keyframe selection.",
    summaryZh: "胃底、胃体、胃角、胃窦、幽门等解剖部位识别与关键帧筛选。",
    positioning:
      "Anatomical understanding system for gastric region recognition, timeline modeling, and keyframe selection.",
    tags: ["Segmentation", "Anatomy", "Timeline", "Medical AI"],
    coverImage: "/images/projects/gastric-segmentation-cover.jpg",
    video: "/videos/projects/gastric-segmentation-demo.webm",
    gallery: [
      "/images/projects/gastric-segmentation-01.jpg",
      "/images/projects/gastric-segmentation-02.jpg",
      "/images/projects/gastric-segmentation-03.jpg"
    ],
    href: "/projects/gastric-anatomy-segmentation",
    category: "Segmentation",
    accent: "from-emerald-300 to-cyan-400",
    sections: {
      problem:
        "Gastric capsule endoscopy requires anatomical localization to evaluate inspection completeness and select representative frames.",
      method:
        "Designed a region segmentation and classification workflow for cardia, fundus, body, angle, antrum, and pylorus, combined with timeline modeling.",
      result:
        "The system supports anatomical region labeling, keyframe selection, and structured navigation for gastric examination review.",
      role:
        "Region definition, data design, segmentation workflow, keyframe scoring logic, and visualization design."
    },
    highlights: [
      "Gastric region segmentation",
      "Anatomical timeline modeling",
      "Keyframe selection",
      "Inspection completeness review"
    ],
    visualHighlights: [
      {
        title: "Segmentation mask",
        description: "Region masks make anatomy visible at frame level.",
        image: "/images/projects/gastric-segmentation-01.jpg"
      },
      {
        title: "Anatomy labels",
        description: "Cardia, fundus, body, angle, antrum, and pylorus.",
        image: "/images/projects/gastric-segmentation-02.jpg"
      },
      {
        title: "Timeline view",
        description: "Sequence-level structure for exam navigation.",
        image: "/images/projects/gastric-segmentation-03.jpg"
      },
      {
        title: "Keyframe selection",
        description: "Representative views support faster review.",
        image: "/images/projects/gastric-segmentation-cover.jpg"
      }
    ]
  },
  {
    slug: "case-level-hp-recognition",
    title: "Case-level HP Recognition",
    titleZh: "幽门螺旋杆菌病例级识别",
    summary:
      "Weakly supervised multi-frame case-level prediction for Helicobacter pylori infection.",
    summaryZh: "基于多帧序列和弱监督/MIL的病例级感染风险判断。",
    positioning:
      "Weakly supervised case-level prediction system for Helicobacter pylori infection based on multi-frame image sequences.",
    tags: ["MIL", "Weak Supervision", "Case-level Prediction", "Medical AI"],
    coverImage: "/images/projects/hp-recognition-cover.jpg",
    video: "/videos/projects/hp-recognition-demo.webm",
    gallery: [
      "/images/projects/hp-recognition-01.jpg",
      "/images/projects/hp-recognition-02.jpg",
      "/images/projects/hp-recognition-03.jpg"
    ],
    href: "/projects/case-level-hp-recognition",
    category: "Prediction",
    accent: "from-blue-300 to-teal-300",
    sections: {
      problem:
        "HP infection prediction is a case-level task. A single frame is insufficient, and each case may contain thousands of noisy frames.",
      method:
        "Built a weakly supervised MIL workflow with frame sampling, feature aggregation, attention-based keyframe scoring, and case-level risk prediction.",
      result:
        "The system outputs case-level infection risk and visualizes key frames that contribute to the prediction.",
      role:
        "Problem formulation, case-level label design, frame sampling strategy, MIL pipeline design, and explainability visualization."
    },
    highlights: [
      "Multi-frame sequence input",
      "Attention keyframes",
      "Case-level infection risk",
      "Explainability visualization"
    ],
    visualHighlights: [
      {
        title: "Multi-frame input",
        description: "Sampled image sequences represent each case.",
        image: "/images/projects/hp-recognition-01.jpg"
      },
      {
        title: "Attention keyframes",
        description: "High-contribution frames explain model decisions.",
        image: "/images/projects/hp-recognition-02.jpg"
      },
      {
        title: "Case-level risk",
        description: "Prediction is made at patient case level.",
        image: "/images/projects/hp-recognition-03.jpg"
      },
      {
        title: "MIL aggregation",
        description: "Frame evidence is aggregated into a single outcome.",
        image: "/images/projects/hp-recognition-cover.jpg"
      }
    ]
  },
  {
    slug: "3d-human-organ-visualization",
    title: "3D Human Organ Visualization",
    titleZh: "人体3D器官可视化",
    summary:
      "3D anatomical visualization and spatial representation for medical AI applications.",
    summaryZh: "人体器官三维结构展示、医学空间信息可视化。",
    positioning:
      "3D anatomical visualization for medical AI presentation, spatial understanding, and clinical communication.",
    tags: ["3D", "Anatomy", "Visualization", "Medical AI"],
    coverImage: "/images/projects/3d-organ-cover.jpg",
    video: "/videos/projects/3d-organ-demo.webm",
    gallery: [
      "/images/projects/3d-organ-01.jpg",
      "/images/projects/3d-organ-02.jpg",
      "/images/projects/3d-organ-03.jpg"
    ],
    href: "/projects/3d-human-organ-visualization",
    category: "Visualization",
    accent: "from-sky-300 to-emerald-300",
    sections: {
      problem:
        "Medical AI results are often difficult to communicate when spatial relationships between organs, lesions, and anatomical regions are unclear.",
      method:
        "Created 3D anatomical visualization assets and interaction views to present organ structures, spatial context, and AI outputs.",
      result:
        "The visualization improves interpretability and makes medical AI workflows easier to communicate to clinical and technical audiences.",
      role:
        "3D asset organization, anatomical structure presentation, visual storytelling, and integration with AI result display."
    },
    highlights: [
      "3D organ rotation",
      "Spatial anatomy display",
      "AI result presentation",
      "Clinical communication"
    ],
    visualHighlights: [
      {
        title: "3D rotation",
        description: "Interactive organ views reveal spatial structure.",
        image: "/images/projects/3d-organ-01.jpg"
      },
      {
        title: "Spatial anatomy",
        description: "Organ relationships are easier to inspect.",
        image: "/images/projects/3d-organ-02.jpg"
      },
      {
        title: "AI result display",
        description: "Outputs can be placed in anatomical context.",
        image: "/images/projects/3d-organ-03.jpg"
      },
      {
        title: "Clinical communication",
        description: "Visual assets support technical and clinical review.",
        image: "/images/projects/3d-organ-cover.jpg"
      }
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return undefined;
  }

  return projects[(currentIndex + 1) % projects.length];
}
