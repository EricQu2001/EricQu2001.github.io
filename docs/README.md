---
pageClass: home-page
# some data for the components

name: Eric Qu
profile: /profile.png

socials:
  - title: google scholar
    icon: "/icons/gscholar.svg"
    link: https://scholar.google.com/citations?user=-qOBJlcAAAAJ&hl=en
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/yhzq
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/EricZQu

cv: "/cv.pdf"
bio: Student at Duke Kunshan University
email: zq32 [at] duke [dot] edu
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am a senior undergraduate student at [Duke Kunshan University](https://www.dukekunshan.edu.cn) majoring in **Data Science**. Currently, I am doing machine learning research mentored by [Dongmian Zou](https://scholars.duke.edu/person/Dongmian.Zou) and [Kai Zhang](https://sites.google.com/site/kaizhangstatmech/people). I am also a research intern at Microsoft Research Aisa, [Shanghai AI/ML Group](https://www.microsoft.com/en-us/research/group/shanghai-ai-ml-group/) led by [Dongsheng Li](http://recmind.cn).

My research interest mainly falls on **Geometric Deep Learning**, **Representation Learning**, and **Graph Neural Networks**. I also have experience in sequence modeling, reinforcement learning, and (3D) computer vision. In general, I am interested in combining ideas from mathematics with machine learning, and using machine learning to solve interdisciplinary problems.


## News

<span style="font-size:17px">

- [Oct 2022]  Our work "Lorentz Direct Concatenation for Stable Training in Hyperbolic Neural Networks" is accepted (Poster) by NuerIPS'22 NeurReps Workshop! :tada:
- [May 2022]  I joined as a research intern in Microsoft Research Asia. :man_office_worker:
<!-- - [Jan 2022]	Our work "Lorentzian Fully Hyperbolic Generative Adversarial Network" is now public on arXiv. -->
- [Aug 2021]	Duke Kunshan University (Times Higher Education) reported our work in the news [here](https://www.timeshighereducation.com/hub/p/data-science-undergraduates-first-published-research-comes-years-passion-computing).
<!-- - [Apr 2021]	Our work "Quantifying Nanoparticle Assembly States in a Polymer Matrix through Deep Learning" is accepted by Macromolecules! :tada: -->

</span>

<!-- ## Education

- **Duke Kunshan University** <br/>
Sept 2019 - Present -->


## Publications & Manuscripts

<ProjectCard image="/projects/continuity.pdf" hideBorder=true>

  <span style="font-size:20px">**Data Continuity Matters: Improving Sequence Modeling with Lipschitz Regularizer**</span>

  *Preprint (Submitted to ICLR 2023, Score 8/6/6/6 **Top 10%**)*

  <span style="color:grey">**Eric Qu**, Xufang Luo, Dongsheng Li</span>

  [[OpenReview](https://openreview.net/forum?id=27uBgHuoSQ)] [[Preprint](/projects/Lip.pdf)] [[Code](/projects/LipRegCode.zip)]

</ProjectCard>

<ProjectCard image="/projects/hknet.pdf" hideBorder=true>

  <span style="font-size:20px">**Hyperbolic Convolution via Kernel Point Aggregation**</span>

  *Preprint (Submitted to AISTATS 2023, Score 7/6/6)*

  <span style="color:grey">**Eric Qu**, Dongmian Zou</span>

  [[Preprint](/projects/HKNet_Preprint.pdf)] [[Code](/projects/HKNetCode.zip)] [[Poster](/projects/HKNet_Poster.pdf)]

</ProjectCard>

<ProjectCard image="/projects/hcat.pdf" hideBorder=true>

  <span style="font-size:20px">**Lorentz Direct Concatenation for Stable Training in Hyperbolic Neural Networks**</span>

  *NeurIPS NeurReps Workshop, **Poster**, (2022)*

  <span style="color:grey">**Eric Qu**, Dongmian Zou</span>

  [[Link](https://openreview.net/forum?id=wjtJ1T1DXME)] [[Poster](/projects/HCat_Poster.pdf)]

</ProjectCard>

<ProjectCard image="/projects/HJTGAN.pdf" hideBorder=true>

  <span style="font-size:20px">**Autoencoding Hyperbolic Representation for Adversarial Generation**</span>

  *arXiv:2201.12825, (Submitted to ICLR 2023, Score 6/6/3)*

  <span style="color:grey">**Eric Qu**, Dongmian Zou</span>

  [[OpenReview](https://openreview.net/forum?id=pmUH7A8wZz)] [[Preprint](/projects/HAEGAN.pdf)] [[Code](/projects/HAEGAN.zip)] [[Slides](/projects/HJTGANSlides.pdf)]

</ProjectCard>

<ProjectCard image="/projects/dopad.png" hideBorder=true>

  <span style="font-size:20px">**Quantifying Nanoparticle Assembly States in a Polymer Matrix through Deep Learning**</span>

  *Macromolecules, 54 (7), 3034-3040, (2021)*

  <span style="color:grey">**Eric Qu**, Andrew Matthew Jimenez, Sanat K. Kumar, Kai Zhang</span>

  [[Link](https://pubs.acs.org/doi/abs/10.1021/acs.macromol.0c02483)] [[Code](https://github.com/yhzq/Quantifying-Nanoparticle-Assembly-States-Through-Deep-Learning)] [[Dataset](https://dopad.github.io)] [[News](https://www.timeshighereducation.com/hub/p/data-science-undergraduates-first-published-research-comes-years-passion-computing)]

</ProjectCard>

<ProjectCard image="/projects/track.png" hideBorder=true>

  <span style="font-size:20px">***In-situ* AFM tracking of Nanoparticle Diffusion in Semicrystalline Polymers**</span>

  *ACS Macro Lett. 2022, 11, 6, 818–824, (2022)*

  <span style="color:grey;font-size:16px">Kamlesh Bornani, Nico Mendez, Abdullah S. Altorbaq, Alejandro Muller, Max Yueqian Lin, **Eric Qu**, Kai Zhang, Sanat K. Kumar, Linda S. Schadler</span>

  [[Link](https://pubs.acs.org/doi/10.1021/acsmacrolett.1c00778)] [[Code](https://github.com/linyueqian/Quantifying-nanopaticles-in-TEM-images-through-deep-learning)]

</ProjectCard>

## Projects

<ProjectCard image="/projects/packing.pdf" hideBorder=true>

  <span style="font-size:20px">**Solving Sticky Hard Sphere Packing Problem through Deep Learning**</span>

  *May 2021*

  <span style="color:grey">**Eric Qu**, Kai Zhang, Dongmian Zou</span>

</ProjectCard>

<ProjectCard image="/projects/KPAE.png" hideBorder=true>

  <span style="font-size:20px">**Finding Optimal Order Parameter for Monodisperse Systems**</span>

  *Oct 2021*

  <span style="color:grey">**Eric Qu**, Max Yueqian Lin, Kai Zhang</span>

</ProjectCard>

[→ Full list of projects and abstract](/projects/)

## Experiences

<ExpCard image="/logo/duke.pdf">

  <span style="font-size:22px">**Exchange Student**</span>

  Fall 2022,                           
  Duke University

  <span style="color:grey;font-size:16px;">Aug 2022 - Dec 2022 &middot; Durham, USA</span>

</ExpCard>

<ExpCard image="/logo/ms.pdf">

  <span style="font-size:22px">**Research Intern**</span>

  [Shanghai AI/ML Group](https://www.microsoft.com/en-us/research/group/shanghai-ai-ml-group/),                  
  Microsoft Research Asia

  <span style="color:grey;font-size:16px;">May 2022 - Present &middot; Shanghai, China</span>

</ExpCard>

<ExpCard image="/logo/DKU.png">

  <span style="font-size:22px">**Teaching Assistant**</span>

  STATS 303 Statistical Machine Learning,                                 
  Duke Kunshan University

  <span style="color:grey;font-size:16px;">Jan 2022 - May 2022 &middot; Jiangsu, China</span>

</ExpCard>

<ExpCard image="/logo/Sinopec.svg">

  <span style="font-size:22px">**Research Intern**</span>

  Victory Software, Data Analysis Department,     
  China Petrochemical Corporation

  <span style="color:grey;font-size:16px;">Jun 2021 - Aug 2021 &middot; Shandong, China</span>

</ExpCard>

<ExpCard image="/logo/DKU.png">

  <span style="font-size:22px">**Research Assistant**</span>

  Machine Learning Group,                      
  Duke Kunshan University

  <span style="color:grey;font-size:16px;">Mar 2021 - Present &middot; Jiangsu, China</span>

  <span style="color:grey;font-size:16px;">Mentored by [Prof. Dongmian Zou](https://scholars.duke.edu/person/Dongmian.Zou)</span>

</ExpCard>

<ExpCard image="/logo/Columbia.png">

  <span style="font-size:22px">**Research Assistant**</span>

  [Kumar Research Group](http://www.columbia.edu/cu/kumargroup/),                      
  Columbia University

  <span style="color:grey;font-size:16px;">Apr 2020 - Nov 2021 &middot; Remote</span>

</ExpCard>

<ExpCard image="/logo/DKU.png">

  <span style="font-size:22px">**Research Assistant**</span>

  Computational Soft Matter and Machine Learning Lab,     
  Duke Kunshan University

  <span style="color:grey;font-size:16px;">Nov 2019 - Present &middot; Jiangsu, China</span>

  <span style="color:grey;font-size:16px;">Mentored by [Prof. Kai Zhang](https://sites.google.com/site/kaizhangstatmech/people)</span>

</ExpCard>


## Awards & Honors

- <p style="text-align:left;font-size:18px;">
      Dean's List - Duke Kunshan University
      <span style="float:right;">
          Fall 2019, Fall 2020, Sring 2021,<br> Fall 2021, Spring 2022
      </span>
  </p> <br>

-	<p style="text-align:left;font-size:18px;">
	    Summer Research Scholar - Duke Kunshan University
	    <span style="float:right;">
	        Jun 2020, Jun 2022
	    </span>
	</p>

-	<p style="text-align:left;font-size:18px;">
	    Mathematical Contest In Modeling - Honorable Mention
	    <span style="float:right;">
	        Apr 2020
	    </span>
	</p>

-	<p style="text-align:left;font-size:18px;">
	    Canadian Computing Competition Senior Division Top 25%
	    <span style="float:right;">
	        Mar 2019
	    </span>
	</p>
	- China region 2<sup>nd</sup>, World 35<sup>th</sup> 
<p style="margin:.25em;"></p>

- <p style="text-align:left;font-size:18px;">
      China National Olympiad in Informatics Senior Group, Frist prize
      <span style="float:right;">
          2016, 2017
      </span>
  </p>



<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 18px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height 1.25
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 140px
        max-height 140px
    .card-content p
      -webkit-margin-after 0.2em
       /*margin: auto*/

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
