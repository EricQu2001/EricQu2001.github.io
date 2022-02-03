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
    link: https://www.linkedin.com/in/eric-qu-b5a079202/

cv: https://ericqu.site/cv.pdf
bio: Student at Duke Kunshan University
email: zq32 [at] duke [dot] edu
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am a junior undergraduate student at [Duke Kunshan University](https://dku.edu.cn) majored in **Data Science**. Currently, I am doing research in machine learning, mentored by [Prof. Dongmian Zou](https://scholars.duke.edu/person/Dongmian.Zou) and [Prof. Kai Zhang](https://sites.google.com/site/kaizhangstatmech/people).

My research interest mainly falls on **Hyperbolic Machine Learning**, **Graph Neural Networks**, and **Generative Models**. I want to combine ideas from mathematics with machine learning. I am also curious and and open to new ideas.


## News

- [Jan 2022]	Our work "Hyperbolic Neural Networks for Molecular Generation" is now public on arXiv.
- [Aug 2021]	Duke Kunshuan University reported our work in the news [here](https://dku.edu.cn/en/news/data-science-undergraduates-first-published-research-comes-years-passion-computing).
- [Apr 2021]	Our wrok "Quantifying Nanoparticle Assembly States in a Polymer Matrix through Deep Learning" is accepted by Macromolecules! :tada:


<!-- ## Education

- **Duke Kunshan University** <br/>
Sept 2019 - Present -->


## Publications


[→ Full list](/projects/)

<ProjectCard image="/projects/HJTGAN.pdf" hideBorder=true>

  <span style="font-size:20px">**Hyperbolic Neural Networks for Molecular Generation**</span>

  *arXiv, 2022*

  <span style="color:grey">Eric Qu, Dongmian Zou</span>
  
  <!-- We propose a novel fully hyperbolic model for molecular generation utilizing the junction tree auto-encoder framework.

  Many deep generators extract atomic relations from molecular graphs and ignore hierarchical information at both atom and molecule levels. In order to extract such hierarchical information, we propose a novel hyperbolic generative model. Our model contains three parts: first, a fully hyperbolic junction-tree encoder-decoder that embeds the hierarchical information of the molecules in the latent hyperbolic space; second, a latent generative adversarial network for generating the latent embeddings; third, a molecular generator that inherits the decoders from the first part and the latent generator from the second part. We evaluate our model on the ZINC dataset using the MOSES benchmarking platform and achieve competitive results, especially in metrics about structural similarity. -->
  
  [[arXiv](https://arxiv.org/abs/2201.12825)] [[Code](https://github.com/yhzq/HJTGAN)]

</ProjectCard>

<ProjectCard image="/projects/dopad.png" hideBorder=true>

  <span style="font-size:20px">**Quantifying Nanoparticle Assembly States in a Polymer Matrix through Deep Learning**</span>

  *Macromolecules, 54 (7), 3034-3040*

  <span style="color:grey">Eric Qu, Andrew Matthew Jimenez, Sanat K. Kumar, Kai Zhang</span>
  
  [[Link](https://pubs.acs.org/doi/abs/10.1021/acs.macromol.0c02483)] [[Code](https://github.com/yhzq/Quantifying-Nanoparticle-Assembly-States-Through-Deep-Learning)] [[DKU News](https://dku.edu.cn/en/news/data-science-undergraduates-first-published-research-comes-years-passion-computing)]

</ProjectCard>

## Experiences

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

  Kumar Research Group,                      
  Columbia University

  <span style="color:grey;font-size:16px;">Apr 2020 - Nov 2021 &middot; Remote</span>

  <!-- <span style="color:grey;font-size:16px;">Mentored by [Prof. Dongmian Zou](https://scholars.duke.edu/person/Dongmian.Zou)</span> -->

</ExpCard>

<ExpCard image="/logo/DKU.png">

  <span style="font-size:22px">**Research Assistant**</span>

  Computational Soft Matter and Machine Learning Lab,     
  Duke Kunshan University

  <span style="color:grey;font-size:16px;">Nov 2019 - Present &middot; Jiangsu, China</span>

  <span style="color:grey;font-size:16px;">Mentored by [Prof. Kai Zhang](https://sites.google.com/site/kaizhangstatmech/people)</span>

</ExpCard>


## Awards & Honors

-	<p style="text-align:left;font-size:18px;">
	    Summer Research Scholar - Duke Kunshan University
	    <span style="float:right;">
	        Jun 2020
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
	        Spr 2019
	    </span>
	</p>
	- China region 2<sup>nd</sup>, World 35<sup>th</sup>


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
