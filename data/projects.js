/* =============================================================================
 * 站点内容 —— 你平时只需要改这个文件（以及 assets/ 里的图片视频）
 * -----------------------------------------------------------------------------
 * 双语写法：任何面向读者的字段都可以写成 { zh: "中文", en: "English" }。
 * 也可以直接写一个字符串 —— 那就两种语言共用，适合人名、数字、代码、URL。
 * 某个语言没写会自动回落到另一个，不会渲染出空白。
 *
 * 这个文件把数据挂在 window.SITE_DATA 上，好处是双击 index.html 就能预览，
 * 不用起本地服务器（file:// 下 fetch json 会被浏览器拦掉）。
 * ========================================================================== */

window.SITE_DATA = {
  /* ---------------------------------------------------------------- 站点级 */
  site: {
    // 团队名如果中英文一样，直接写字符串就行
    team: "WorldRenderer",
    teamShort: "WR",
    tagline: {
      zh: "研究那些真正重要的占位问题。",
      en: "Research on placeholder things that matter.",
    },
    logo: "assets/favicon.svg",
    // 页脚链接（header 主导航是 Research / Blog，见下面的 nav）
    links: [
      { label: "GitHub", href: "https://github.com/your-org", icon: "github" },
      { label: "X", href: "https://x.com/your-handle", icon: "twitter" },
    ],
    footer: {
      note: "WorldRenderer Project Page",
      credit: {
        zh: "设计参考 Nerfies / academic-project-page 一脉。",
        en: "Design inspired by the Nerfies / academic-project-page lineage.",
      },
      contact: "mailto:you@example.com",
    },
  },

  /* -------------------------------------------------------------- 首页文案 */
  /* 打开 index.html（不带任何 query）时看到的东西。
   * title 里 *星号* 包住的词会显示成品牌色。 */
  home: {
    title: "*WorldRenderer*: Render Your World",
    intro: "Render your world with WorldRenderer, a model generates geometrically aligned and memory-consistent long videos from multimodal inputs.",
  },

  /* ------------------------------------------------------- 栏目（列表页） */
  /* 每个栏目对应 header 里一个导航项，URL 是 index.html?s=<key>
   * key 为 "research" 的栏目，条目取自下面的 projects[]；
   * key 为 "blog" 的栏目，条目取自下面的 posts[]。 */
  nav: [
    {
      key: "research",
      label: "Research",
      title: "Research",
      intro: "Peer-reviewed research.",
    },
  ],

  /* ------------------------------------------------------------------ 项目 */
  /* 每个项目一个对象。id 会出现在 URL 里：index.html?p=<id>
   * sections 是有序数组，type 决定渲染方式，目前支持：
   *   text | figure | gallery | video | compare | table | features | steps
   */
  projects: [
    {
      id: "WorldRenderer",
      title: "WorldRenderer: Long-Horizon WorldRendering with Memory-Augmented Video Diffusion",
      short: "WorldRenderer",
      subtitle: "WorldRenderer synthesizes geometrically aligned and memory-consistent long videos from multimodal inputs.",

      // 会议信息：标题下方一行居中排版。没中会议就把这几行删掉，整块自动消失。
      venue: "...",              // 会议名不用翻译
      venueNote: "",                   // 副标注，如 "(ACM TOG)"，可省略
      date: "2026-06",                 // 只在切换器/卡片里显示
      thumb: "assets/images/teaser.jpg",  // 卡片缩略图，最好是 1:1 方形
      keywords: ["3D scene rendering", "video generation", "distillation"],

      // 人名一般不翻译，写字符串即可；需要中英两版就写成 { zh, en }
      authors: [
        { name: "Li Yin", url: "#", affil: [1], note: "*" },
        { name: "Ming Lin", url: "#", affil: [1], note: "*"  },
        { name: "Yuzhen Wang", url: "#", affil: [1] },
        { name: "Yang-Tian Sun", url: "https://sunyangtian.github.io/", affil: [2] },
        { name: "Haoran Feng", url: "#", affil: [3] },
        { name: "Jianyi Zhang", url: "#", affil: [1] },
        { name: "Zhenghao Song", url: "#", affil: [1] },
        { name: "Hongxing Fan", url: "#", affil: [1] },
        { name: "Zehuan Huang", url: "https://huanngzh.github.io/", affil: [3], note: "†" },
        { name: "Yan-Pei Cao", url: "https://yanpei.me/", affil: [3] },
        { name: "Lu Sheng", url: "https://lucassheng.github.io/", affil: [1], note: "✉"  },
      ],
      affiliations: [
        "Beihang University",
        "The University of Hong Kong",
        "VAST",
      ],

      authorNotes: "* Equal contribution　† Project Lead　✉ Corresponding Author",

      links: [
        { label: "arXiv", href: "#", icon: "arxiv" },
        { label: { zh: "代码", en: "Code" }, href: "#", icon: "code" },
        { label: { zh: "模型", en: "Model" }, href: "#", icon: "hf" },
      ],

      teaser: {
        src: "assets/videos/worldrenderer_video.mp4",
        caption: "WorldRenderer uses geometry guidance and history-warped memory to generate long, camera-controlled videos from 3D geometry, an initial image, and text while preserving structure and appearance across revisits.",
      },

      abstract: "World rendering synthesizes videos of 3D environments along prescribed camera trajectories for simulation and interactive exploration. " +
            "Traditional graphics pipelines ensure consistency but require complete assets and extensive manual specification. " +
            "Autoregressive video generation offers greater flexibility, yet often suffers from memory inconsistency and long-term drift. " +
            "We present WorldRenderer, a memory-augmented video diffusion framework " +
            "that produces temporally consistent and geometrically coherent long videos from 3D scenes. " +
            "WorldRenderer achieves the best reference-based visual fidelity, structural fidelity,  " +
            "memory consistency and FPS among the evaluated methods.",


      sections: [
        {
          type: "compare",
          id: "comparison",
          eyebrow: { zh: "对比", en: "Side by side" },
          title: "Results",
          body: {
            zh: "拖动中间的滑块对比 baseline 与我们的结果。",
            en: "Drag the slider to compare the input geometry against generated video.",
          },
          sceneLabel: { zh: "选择场景", en: "Select scene" },
          scenes: [
            {
              label: { zh: "场景 0010", en: "Scene 0010" },
              thumb: "assets/images/0010_pred.jpg",
              before: {
                src: "assets/videos/0010_depth.mp4",
                label: "Depth Video" ,
              },
              after: {
                src: "assets/videos/0010_pred.mp4",
                label: "Generated Video",
              },
            },
            // 新场景按上面的结构继续添加即可
            {
              label: { zh: "场景 0023", en: "Scene 0023" },
              thumb: "assets/images/0023_pred.jpg",
              before: {
                src: "assets/videos/0023_depth.mp4",
                label: "Depth Video" ,
              },
              after: {
                src: "assets/videos/0023_pred.mp4",
                label: "Generated Video",
              },
            },
            {
              label: { zh: "场景 0032", en: "Scene 0032" },
              thumb: "assets/images/0032_pred.jpg",
              before: {
                src: "assets/videos/0032_normal.mp4",
                label: "Normal Video" ,
              },
              after: {
                src: "assets/videos/0032_pred.mp4",
                label: "Generated Video",
              },
            },
            {
              label: { zh: "场景 0036", en: "Scene 0036" },
              thumb: "assets/images/0036_pred.jpg",
              before: {
                src: "assets/videos/0036_normal.mp4",
                label: "Depth Video" ,
              },
              after: {
                src: "assets/videos/0036_pred.mp4",
                label: "Generated Video",
              },
            },
            {
              label: { zh: "场景 0039", en: "Scene 0039" },
              thumb: "assets/images/0039_pred.jpg",
              before: {
                src: "assets/videos/0039_depth.mp4",
                label: "Depth Video" ,
              },
              after: {
                src: "assets/videos/0039_pred.mp4",
                label: "Generated Video",
              },
            },
            {
              label: { zh: "动态场景 6", en: "Dynamic Scene 6" },
              thumb: "assets/images/dynamic6_pred.jpg",
              before: {
                src: "assets/videos/dynamic6_depth.mp4",
                label: "Depth Video" ,
              },
              after: {
                src: "assets/videos/dynamic6_pred.mp4",
                label: "Generated Video",
              },
            },
          ],
        },
        
        
        {
          type: "compare",
          id: "memory-revisits",
          eyebrow: { zh: "长期一致性", en: "Long-term consistency" },
          title: { zh: "回访海边步道", en: "Revisiting the Waterfront" },
          body: {
            zh: "观察末段回访：在这个样例中，关闭 memory 后，先前的步道变成了水面；开启 memory 后，步道和沿岸建筑保留了前次生成的布局与外观。拖动滑块比较完整 25 秒视频。",
            en: "Watch the return visit near the end: in this example, disabling memory turns the earlier promenade into water. With memory enabled, the promenade and waterfront buildings retain their previously generated layout and appearance. Drag the slider to compare the full 25-second videos.",
          },
          scenes: [
            {
              label: { zh: "威尼斯日落", en: "Venice sunset" },
              thumb: "assets/images/memory/polyhaven-venice_sunset.jpg",
              before: {
                src: "assets/videos/memory/polyhaven-venice_sunset-off.mp4",
                label: "Memory off",
              },
              after: {
                src: "assets/videos/memory/polyhaven-venice_sunset-on.mp4",
                label: "Memory on",
              },
            },
          ],
          caption: {
            zh: "两侧使用相同权重、输入、相机轨迹和随机种子（42），仅切换历史 memory。全景图来源：<a href='https://polyhaven.com/a/venice_sunset' target='_blank' rel='noopener'>Poly Haven · Venice Sunset</a>（CC0）；深度与法线由图像估计。",
            en: "Identical checkpoint, inputs, camera path and seed (42); only historical memory is toggled. Source panorama: <a href='https://polyhaven.com/a/venice_sunset' target='_blank' rel='noopener'>Poly Haven · Venice Sunset</a> (CC0). Depth and normals are estimated from images.",
          },
        },

        {
          type: "figure",
          id: "method",
          eyebrow: { zh: "方法", en: "How it works" },
          title: "Method" ,
          body: "WorldRenderer is a memory-augmented video diffusion framework that generates long videos along a prescribed camera trajectory from a <b>3D scene, an initial frame, and a text prompt</b>. " +
                "The framework combines geometry-guided conditioning, history-warped memory, clean-history teacher forcing, and few-step distillation to maintain both geometric structure and appearance consistency over long autoregressive sequences.", 
          src: "assets/images/framework.jpg",
          caption: "Method overview. Depth and normal tokens provide structural constraints through geometry-guided cross-attention. The history cache is filtered by visibility, aligned to target positions, and injected into self-attention to recover consistent appearance in revisited regions.",
        },
        {
          type: "features",
          id: "method-components",
          eyebrow: { zh: "核心设计", en: "Core components" },
          title: { zh: "四个互补模块", en: "Four Complementary Components" },
          body: {
            zh: "几何负责结构，记忆负责外观，长程训练抑制误差累积，蒸馏则让逐块生成足够高效。",
            en: "Geometry anchors structure, memory restores appearance, long-horizon training limits error accumulation, and distillation makes chunk-wise generation practical.",
          },
          items: [
            {
              icon: "check",
              title: "Geometry-Guided Conditioning",
              body: "View-aligned depth and normal maps are injected throughout the DiT, helping generation follow the camera trajectory while suppressing long-term geometric drift.",
            },
            {
              icon: "check",
              title: "History-Warped Memory",
              body: "Historical tokens observing the same 3D points are retrieved, warped to their target positions, and injected into self-attention—even after a region has remained out of view for a long time.",
            },
            {
              icon: "check",
              title: "Long-Horizon Teacher Forcing",
              body: "During training, only the current chunk is noised while history comes from clean ground-truth frames, teaching the model to use reliable appearance cues and resist autoregressive error accumulation.",
            },
            {
              icon: "check",
              title: "Few-Step Distillation",
              body: "Under identical text, geometry, and memory conditions, probability-flow ODE distillation compresses the teacher into a fast few-step student for efficient autoregressive rendering.",
            },
          ],
        },
        {
          type: "steps",
          id: "rendering-pipeline",
          eyebrow: { zh: "推理流程", en: "Inference" },
          title: { zh: "逐块渲染长视频", en: "Chunk-by-Chunk Rendering Pipeline" },
          body: {
            zh: "几何条件与跨视角对应关系在生成前一次性预计算；推理阶段则循环执行记忆检索、少步生成和缓存更新。",
            en: "Geometry conditions and cross-view correspondences are precomputed once; inference then alternates memory retrieval, few-step generation, and cache updates.",
          },
          items: [
            {
              title: { zh: "预渲染几何条件", en: "Render Geometry Conditions" },
              body: {
                zh: "沿完整相机轨迹从 3D 场景渲染每一目标视图的深度图与表面法线图。",
                en: "Render depth and surface normals for every target view along the complete camera trajectory.",
              },
            },
            {
              title: { zh: "预计算 3D 对应关系", en: "Precompute 3D Correspondences" },
              body: {
                zh: "利用已知几何与相机参数建立历史帧和目标帧之间的可见性与 token correspondence。",
                en: "Use known geometry and cameras to establish visibility and token correspondences between historical and target frames.",
              },
            },
            {
              title: { zh: "初始化持久记忆", en: "Initialize Persistent Memory" },
              body: {
                zh: "初始图像、文本提示和首个视频块共同建立永久 sink tokens，保留生成起点的稳定外观锚点。",
                en: "The initial image, text prompt, and first chunk establish permanent sink tokens that serve as a stable appearance anchor.",
              },
            },
            {
              title: { zh: "检索记忆并少步生成", en: "Retrieve Memory and Generate" },
              body: {
                zh: "对每个后续块，筛选可见历史 token、对齐至当前目标位置，并与几何条件一起驱动少步视频 DiT。",
                en: "For each subsequent chunk, visible history tokens are selected and aligned to target positions, then combined with geometry to condition the few-step video DiT.",
              },
            },
            {
              title: { zh: "更新缓存并继续", en: "Update the Cache and Continue" },
              body: {
                zh: "将新生成 token 加入有界 recent cache，同时保留永久 sink；沿相机轨迹重复该过程直至完成长视频。",
                en: "Append newly generated tokens to the bounded recent cache while retaining the permanent sink, then repeat along the trajectory until the video is complete.",
              },
            },
          ],
        },
        {
          type: "gallery",
          id: "results",
          title: { zh: "更多结果", en: "More Results" },
          body: { zh: "更多样例。点开可以放大查看。", en: "More samples. Click to enlarge." },
          columns: 3,
          items: [
            { src: "assets/videos/youtube/causalofflinestage2-step4000-sink-youtube0309_pick_401f-s0000-401f-win21-sink6.mp4"},
            { src: "assets/videos/youtube/causalofflinestage2-step4000-sink-youtube0309_pick_401f-s0001-401f-win21-sink6.mp4"},
            { src: "assets/videos/youtube/causalofflinestage2-step4000-sink-youtube0311_pick_401f-s0000-401f-win21-sink6.mp4"},
            { src: "assets/videos/youtube/causalofflinestage2-step4000-sink-youtube0311_pick_401f-s0001-401f-win21-sink6.mp4"},
            { src: "assets/videos/omniworld/causalofflinestage2-step4000-sink-omniworld_test_warp_401f-s0007-401f-win21-sink6.mp4"},
            { src: "assets/videos/omniworld/causalofflinestage2-step9500-sink-omniworld_test_warp_401f-s0004-401f-win21-sink6.mp4"},
            { src: "assets/videos/omniworld/causalofflinestage2-step9500-sink-omniworld_test_warp_401f-s0010-401f-win21-sink6.mp4"},
            { src: "assets/videos/omniworld/causalofflinestage2-step9500-sink-omniworld_test_warp_401f-s0014-401f-win21-sink6.mp4"},
            { src: "assets/videos/old_dynamic/0001_chunk_0_output.mp4"},
            { src: "assets/videos/old_dynamic/0003_chunk_0_output.mp4"},
            { src: "assets/videos/old_dynamic/0008_chunk_0_output.mp4"},
            { src: "assets/videos/test-memory/causalofflinestage2-step4000-corrsink-sinkonly-testmemory_warp_moge_401f-s0012-401f-win21-sink6.mp4"},
            { src: "assets/videos/test-memory/causalofflinestage2-step4000-corrsink-sinkonly-testmemory_warp_moge_401f-s0014-401f-win21-sink6.mp4"},
            { src: "assets/videos/test_dataset/0006.mp4"},
            { src: "assets/videos/test_dataset/0012.mp4"},
            { src: "assets/videos/test_dataset/0013.mp4"},
            { src: "assets/videos/test_dataset/0016.mp4"},
            { src: "assets/videos/test_dataset/0017.mp4"},
            { src: "assets/videos/test_dataset/0023.mp4"},
            { src: "assets/videos/test_dataset/0024.mp4"},
          ],
        },
        
      ],

      // BibTeX 是代码，不分语言
      bibtex:
        "@misc{yin2026worldrenderer,\n" +
        "  title  = {WorldRenderer: Long-Horizon World Rendering with Memory-Augmented Video Diffusion},\n" +
        "  author = {Yin, Li and Lin, Ming and Wang, Yuzhen and Sun, Yang-Tian and Feng, Haoran and Zhang, Jianyi and Song, Zhenghao and Fan, Hongxing and Huang, Zehuan and Cao, Yan-Pei and Sheng, Lu},\n" +
        "  year   = {2026}\n" +
        "}",

      // acknowledgements: {
      //   zh: "致谢占位：感谢算力支持、感谢讨论、感谢基金编号 XXXXX。",
      //   en: "Placeholder acknowledgements: compute support, helpful discussions, grant XXXXX.",
      // },
    },

  ],

  /* -------------------------------------------------------------- Blog 文章 */
  /* 结构和 projects[] 完全一样，只是列在 Blog 栏目下、没有 venue/作者列表这些
   * 论文才需要的字段。同样支持 sections，所以正文可以放图、表、代码步骤。
   * URL 也是 index.html?p=<id>，两个数组的 id 不要重名。 */
  posts: [

  ],
};
