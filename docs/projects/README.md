---
pageClass: projects-page
---

# Works

Here are some works of mine :books:

## Publications & Manuscripts

<ProjectCard image="/projects/continuity.pdf" hideBorder=true>

  <span style="font-size:20px">**Data Continuity Matters: Improving Sequence Modeling with Lipschitz Regularizer**</span>

  *Preprint (2022)*

  <span style="color:grey">**Eric Qu**, Xufang Luo, Dongsheng Li</span>

  <span style="font-size:16px">We discovered empirically and theoretically proved that many sequence models have different assumptions about the continuity of the input sequence. To utilize this property, we designed a regularizer that could alter the continuity of the input sequence and showed its effectiveness in various sequence models.</span>

  [[OpenReview](https://openreview.net/forum?id=27uBgHuoSQ)] [[Preprint](/projects/Lip.pdf)] [[Code](/projects/LipRegCode.zip)]

</ProjectCard>

<ProjectCard image="/projects/HJTGAN.pdf" hideBorder=true>

  <span style="font-size:18px">**Autoencoding Hyperbolic Representation for Adversarial Generation**</span>

  *arXiv:2201.12825, (2022)*

  <span style="color:grey">**Eric Qu**, Dongmian Zou</span>
  
  <span style="font-size:16px">We propose a generative model (HAEGAN) in hyperbolic space that is capable of generating complex data. Many specific operations and layers were proposed to ensure numerical stability. HAEGAN outperfroms SOTA in structure-related performance of the molecular generation experiment.</span>
  
  [[OpenReview](https://openreview.net/forum?id=pmUH7A8wZz)] [[Preprint](/projects/HAEGAN.pdf)] [[Code](/projects/HAEGAN.zip)] [[Slides](/projects/HJTGANSlides.pdf)]

</ProjectCard>


<ProjectCard image="/projects/hcat.pdf" hideBorder=true>

  <span style="font-size:18px">**Lorentz Direct Concatenation for Stable Training in Hyperbolic Neural Networks**</span>

  *NeurIPS NuerReps Workshop, **Poster**, (2022)*

  <span style="color:grey">**Eric Qu**, Dongmian Zou</span>

  <span style="font-size:16px">We discussed an operation proposed in the HAEGAN paper, the Lorentz Direct Concatenation. Compared with concatenating in the tangent space, our method is more stable and better at preserving the hyperbolic distance. </span>

  [[Link](https://openreview.net/forum?id=wjtJ1T1DXME)] [[Poster](/projects/HCat_Poster.pdf)]

</ProjectCard>

<ProjectCard image="/projects/hknet.pdf" hideBorder=true>

  <span style="font-size:18px">**Hyperbolic Convolution via Kernel Point Aggregation**</span>

  *Preprint (2022)*

  <span style="color:grey">**Eric Qu**, Dongmian Zou</span>

  <span style="font-size:16px">We constructed a novel hyperbolic convolution operation (HKConv), which first correlates trainable local hyperbolic features with fixed hyperbolic kernel points, then aggregates the output features within a local neighborhood. HKConv enjoys equivariance to permutation of input and invariance to parallel transport of a local neighborhood.</span>

  [[Preprint](/projects/HKNet_Preprint.pdf)] [[Code](/projects/HKNetCode.zip)] [[Poster](/projects/HKNet_Poster.pdf)]

</ProjectCard>

<ProjectCard image="/projects/dopad.png" hideBorder=true>

  <span style="font-size:18px">**Quantifying Nanoparticle Assembly States in a Polymer Matrix through Deep Learning**</span>

  *Macromolecules, 54 (7), 3034-3040, (2021)*

  <span style="color:grey">**Eric Qu**, Andrew Matthew Jimenez, Sanat K. Kumar, Kai Zhang</span>

  <span style="font-size:16px">We develop and apply a deep-learning based image analysis method to quantify the distribution of spherical NPs in a polymer matrix directly from their real-space TEM images.</span>
  
  [[Link](https://pubs.acs.org/doi/abs/10.1021/acs.macromol.0c02483)] [[Code](https://github.com/yhzq/Quantifying-Nanoparticle-Assembly-States-Through-Deep-Learning)] [[Dataset](https://dopad.github.io)] [[News](https://www.timeshighereducation.com/hub/p/data-science-undergraduates-first-published-research-comes-years-passion-computing)]

</ProjectCard>

<ProjectCard image="/projects/track.png" hideBorder=true>

  <span style="font-size:18px">***In-situ* AFM tracking of Nanoparticle Diffusion in Semicrystalline Polymers**</span>

  *ACS Macro Lett. 2022, 11, 6, 818–824, (2022)*


  <span style="color:grey;font-size:14px">Kamlesh Bornani, Nico Mendez, Abdullah S. Altorbaq, Alejandro Muller, Max Yueqian Lin, **Eric Qu**, Kai Zhang, Sanat K. Kumar, Linda S. Schadler</span>

  <span style="font-size:16px">We design a model for detecting and tracking the drift of nanoparticles in TEM videos.</span>

  [[Link](https://pubs.acs.org/doi/10.1021/acsmacrolett.1c00778)]

</ProjectCard>

## Projects <span style="color:grey;font-size:16px;">*( <sup>\*</sup> indicates equal contribution)*</span>

<ProjectCard image="/projects/packing.pdf" hideBorder=true>

  <span style="font-size:18px">**Solving Sticky Hard Sphere Packing Problem through Deep Learning**</span>

  <span style="color:grey">**Eric Qu**, Kai Zhang, Dongmian Zou</span>

  <!-- <span style="font-size:16px">We propose a method of solving sticky hard sphere packing problem. The packing state of the spheres could be mapped to a graph according to the sphere connections. A modified version of Graph Isomorphism Network is trained to identify the valid packing with high accuracy. Then, we train a Mento Carlo Search Tree to generate new packings with the reward based on perviously trained GIN.</span> -->

  <span style="font-size:16px">Sticky hard sphere packing is a challenging problem in physics. In our method, we first map the packing state into a graph and use a modified Graph Isomorphism Network (GIN) to identify the valid packing with high accuracy. Then, a Mento Carlo Search Tree is trained to generate new packings with the reward based on the GIN.</span>

</ProjectCard>

<ProjectCard image="/projects/KPAE.png" hideBorder=true>

  <span style="font-size:18px">**Finding Optimal Order Parameter for Monodisperse Systems**</span>

  <span style="color:grey">**Eric Qu**, Max Yueqian Lin, Kai Zhang</span>

  <!-- <span style="font-size:16px">We develop a model to find the optimal order parameter for particle packing systems. The packing state is represented by the 3D point cloud data. We proposed a novel Kernel Point Autoencoder model using KPConv as encoder and our Kernel Point Generator as decoder. Then, the bottleneck layer is extracted to be the order parameter.</span> -->

  <span style="font-size:16px">Order parameter of a particle system describes whither it is more crystal-like or glass-like. The packing state could be represented by 3D point cloud. We proposed a novel Kernel Point Autoencoder model using KPConv as encoder and our Kernel Point Generator as decoder. Then, the bottleneck activation is extracted to be the order parameter.</span>

</ProjectCard>

<!-- <ProjectCard image="/projects/circle.png" hideBorder=true>

  <span style="font-size:18px">**Square Object Detection using Bounding Circles**</span>

  <span style="color:grey">**Eric Qu**, Anish Kumar Nayak, Tejus Shastry, Sanat K. Kumar, Kai Zhang</span>

  <span style="font-size:16px">We propose a deep learning model for detecting square objects. The square objects could have different orientations, which means that the result of old coordinate aligned bounding boxes is not uniform and representative. We change the bounding boxes to be bounding circles in YOLO and use the model to detect the position an size of DNA nanoCrystals.</span> -->

</ProjectCard>

<ProjectCard image="/projects/manifold.jpeg" hideBorder=true>

  <span style="font-size:18px">**Class Note for DKU MATH 408: Differential Geometry**</span>

  <span style="color:grey">**Eric Qu**</span>

  <span style="font-size:16px">A well organized class note for differential geometry.</span>

  [[Note](/projects/math408.pdf)]

</ProjectCard>

<!-- <ProjectCard image="/projects/cell.png" hideBorder=true>

  <span style="font-size:18px">**Accurate Cell Segmentation through Vision Transformer**</span>

  <span style="color:grey">**Eric Qu**<sup>\*</sup>, Alex Jin<sup>\*</sup>, Dongmian Zou</span>

  <span style="font-size:16px">We use a modified version of vision transformer to enable accurate cell segmentation. Our model use Swin transformer as backbone and a novel transformer architecture as segment head. This enables it to achieve ultrahigh accuracy in the instance segment of crowded and repeated objects.</span>

</ProjectCard> -->

<!-- <ProjectCard image="/projects/bird.png" hideBorder=true>

  <span style="font-size:18px">**Use Reinforcement Learning to Play Flappy Bird**</span>

  <span style="color:grey">**Eric Qu**</span>

  <span style="font-size:16px">A cool class project of STATS 210.</span>

  [[Demo](/projects/rldemo)] [[Slides](/projects/RLSlides.pdf)]

</ProjectCard> -->

<style lang="stylus">

.projects-page

  font-size 18px
  background-color #fafbfc

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 200px
        max-height 200px
        height 250px
    .card-content p
      -webkit-margin-after 0.2em
       /*margin: auto*/

/*@media (max-width: 419px)
  .projects-page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px*/
</style>
