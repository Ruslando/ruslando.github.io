export const publicationsData = {
  'geometric-design-automation': {
    id: 'geometric-design-automation',
    title: 'Geometric Design Process Automation with Artificial Intelligence',
    authors: 'Jörg Brünnhäußer, Pascal Lünnemann, Ursina Bisang, Ruslan Novikov, Florian Flachmeier, Mario Wolff',
    conference: 'Advances in Production Management Systems (APMS)',
    publisher: 'Springer Nature Switzerland',
    pages: '35-42',
    year: 'September 19, 2022',
    abstract: `Design tasks are largely performed manually by engineers, while machine learning is increasingly able to support and partially automate this process to save time or costs. The prerequisite for this is that the necessary data for training is available. This paper investigates whether it is possible to use data-driven methods to support the design of jounce bumpers at BASF. Based on the analysis of the use case, the geometry of the jounce bumper is approximated with a spline to generate suitable data for training. Based on this, data for training the machine learning model is generated and simulated. In the training process, the appropriate feedforward neural network and the best combination of hyperparameters are determined. In the subsequent evaluation process, it is shown that it is possible to predict the geometries of jounce bumpers with our proof of concept. Finally, the results are discussed, the limitations are shown and the next steps to further improve the results are reflected.`,
    keywords: ['Design Automation', 'Machine Learning', 'Data-driven Design', 'Synthetic Data'],
    links: {
      doi: 'https://doi.org/10.1007/978-3-031-16407-1_5'
    },
    citations: 0,
    bibtex: `@InProceedings{10.1007/978-3-031-16407-1_5,
author="Br{\\"u}nnh{\\"a}u{\\ss}er, J{\\"o}rg
and L{\\"u}nnemann, Pascal
and Bisang, Ursina
and Novikov, Ruslan
and Flachmeier, Florian
and Wolff, Mario",
editor="Kim, Duck Young
and von Cieminski, Gregor
and Romero, David",
title="Geometric Design Process Automation with Artificial Intelligence",
booktitle="Advances in Production Management Systems. Smart Manufacturing and Logistics Systems: Turning Ideas into Action",
year="2022",
publisher="Springer Nature Switzerland",
address="Cham",
pages="35--42",
abstract="Design tasks are largely performed manually by engineers, while machine learning is increasingly able to support and partially automate this process to save time or costs. The prerequisite for this is that the necessary data for training is available. This paper investigates whether it is possible to use data-driven methods to support the design of jounce bumpers at BASF. Based on the analysis of the use case, the geometry of the jounce bumper is approximated with a spline to generate suitable data for training. Based on this, data for training the machine learning model is generated and simulated. In the training process, the appropriate feedforward neural network and the best combination of hyperparameters are determined. In the subsequent evaluation process, it is shown that it is possible to predict the geometries of jounce bumpers with our proof of concept. Finally, the results are discussed, the limitations are shown and the next steps to further improve the results are reflected.",
isbn="978-3-031-16407-1"
}`
  }
}

export type Publication = typeof publicationsData[keyof typeof publicationsData]