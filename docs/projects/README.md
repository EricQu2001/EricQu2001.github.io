---
pageClass: projects-page
---

# Works

Here are some works of mine :books:

## Publications

<ProjectCard image="/projects/HJTGAN.pdf" hideBorder=true>

  <span style="font-size:18px">**Hyperbolic Neural Networks for Molecular Generation**</span>

  *arXiv:2201.12825, 2022*

  <span style="color:grey">**Eric Qu**, Dongmian Zou</span>
  
  <span style="font-size:16px">We propose a novel fully hyperbolic model for molecular generation utilizing the junction tree auto-encoder framework. Other contributions include novel concatenation and split operations in Lorentz space and a formulation of fully hyperbolic WGAN with novel gradient penalty.</span>
  
  [[arXiv](https://arxiv.org/abs/2201.12825)] [[Code](https://github.com/yhzq/HJTGAN)] [[Slides](/projects/HJTGANSlides.pdf)]

</ProjectCard>

<ProjectCard image="/projects/dopad.png" hideBorder=true>

  <span style="font-size:18px">**Quantifying Nanoparticle Assembly States in a Polymer Matrix through Deep Learning**</span>

  *Macromolecules, 54 (7), 3034-3040, (2021)*

  <span style="color:grey">**Eric Qu**, Andrew Matthew Jimenez, Sanat K. Kumar, Kai Zhang</span>

  <span style="font-size:16px">We develop and apply a deep-learning based image analysis method to quantify the distribution of spherical NPs in a polymer matrix directly from their real-space TEM images.</span>
  
  [[Link](https://pubs.acs.org/doi/abs/10.1021/acs.macromol.0c02483)] [[Code](https://github.com/yhzq/Quantifying-Nanoparticle-Assembly-States-Through-Deep-Learning)] [[Dataset](https://dopad.github.io)] [[DKU News](https://dku.edu.cn/en/news/data-science-undergraduates-first-published-research-comes-years-passion-computing)]

</ProjectCard>

## Manuscripts & Projects <span style="color:grey;font-size:16px;">*( <sup>\*</sup> indicates equal contribution)*</span>

<ProjectCard image="/projects/packing.pdf" hideBorder=true>

  <span style="font-size:18px">**Solving Sticky Hard Sphere Packing Problem through Reinforcement Learning and Graph Neutral Networks**</span>

  <span style="color:grey">**Eric Qu**, Kai Zhang, Dongmian Zou</span>

  <span style="font-size:16px">We propose a method of solving sticky hard sphere packing problem. The packing state of the spheres could be mapped to a graph according to the sphere connections. A modified version of Graph Isomorphism Network is trained to identify the valid packing with high accuracy. Then, we train a Mento Carlo Search Tree to generate new packings with the reward based on perviously trained GIN.</span>

</ProjectCard>

<ProjectCard image="/projects/KPAE.png" hideBorder=true>

  <span style="font-size:18px">**Finding Optimal Order Parameter for Particle Systems**</span>

  <span style="color:grey">**Eric Qu**, Max Yueqian Lin, Kai Zhang</span>

  <span style="font-size:16px">We develop a model to find the optimal order parameter for particle packing systems. The packing state is represented by the 3D point cloud data. We proposed a novel Kernel Point Autoencoder model using KPConv as encoder and our Kernel Point Generator as decoder. Then, the bottleneck layer is extracted to be the order parameter.</span>

</ProjectCard>

<ProjectCard image="/projects/circle.png" hideBorder=true>

  <span style="font-size:18px">**Square Object Detection using Bounding Circles**</span>

  <span style="color:grey">**Eric Qu**, Anish Kumar Nayak, Tejus Shastry, Sanat K. Kumar, Kai Zhang</span>

  <span style="font-size:16px">We propose a deep learning model for detecting square objects. The square objects could have different orientations, which means that the result of old coordinate aligned bounding boxes is not uniform and representative. We change the bounding boxes to be bounding circles in YOLO and use the model to detect the position an size of DNA nanoCrystals.</span>

</ProjectCard>

<ProjectCard image="/projects/tracking.png" hideBorder=true>

  <span style="font-size:18px">***In-situ* AFM tracking of Nanoparticle Diffusion in Semicrystalline Polymers**</span>

  <span style="color:grey">Kamlesh Bornani, Nico Mendez, Abdullah S. Altorbaq, Alejandro Muller, Kai Zhang, Max Yueqian Lin, **Eric Qu**, Sanat K. Kumar, Linda S. Schadler</span>

  <span style="font-size:16px">We design a model for detecting and tracking the drift of nanoparticles in TEM videos.</span>

</ProjectCard>

<ProjectCard image="/projects/cell.png" hideBorder=true>

  <span style="font-size:18px">**Accurate Cell Segmentation through Vision Transformer**</span>

  <span style="color:grey">**Eric Qu**<sup>\*</sup>, Alex Jin<sup>\*</sup>, Dongmian Zou</span>

  <span style="font-size:16px">We use a modified version of vision transformer to enable accurate cell segmentation. Our model use Swin transformer as backbone and a novel transformer architecture as segment head. This enables it to achieve ultrahigh accuracy in the instance segment of crowded and repeated objects.</span>

</ProjectCard>

<ProjectCard image="/projects/bird.png" hideBorder=true>

  <span style="font-size:18px">**Use Reinforcement Learning to Play Flappy Bird**</span>

  <span style="color:grey">**Eric Qu**</span>

  <span style="font-size:16px">A cool class project of STATS 210.</span>

  [[Demo](/projects/rldemo)] [[Slides](/projects/RLSlides.pdf)]

</ProjectCard>

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
