# Romain Denis

## 08.11.2024

### Introduction du projet (40 mins)

- On peut utiliser un fichier de notes pour toute la classe
- Nommage du commit exemple : feat(snake):Répondre à une touche, écoute(kickoff): Ajouter notes
- Exemple description : [45] [Done]
- Question à se poser pour nommer un commit : "Qu'est ce que j'ai fait pour arriver au résultat?" donc, quoi(sur quoi): qu'est ce qui est fait
- Description des commits (Journal de travail) : [temps] [WIP ou DONE]

### Lecture CdC (15 mins)

 - Lu et rempli le Cdc

### Aide Antoine (10 mins)

 - Aide Antoine (Il avait un RDV)

### Ecoute presentation stash (10 mins)

 - Jai ecoute le prof parler de stash

### Lecture Doc JS (70 mins)

 - Jai lu la doc @ https://javascript.info/
 - Jai edit le README.md

## 15.11.2024

### Spawn apple (65mins)

 - Mon code spawn un carre rouge aleatoirement dans le canvas  

### Cube qui bouge (1h35min)

 - J'ai un cube qui bouge 

### Cleanup du code (60mins)

 - Tout le code est dans le bon .js

### Lire documentation (90mins)

 - Entree mit pendant P_Prod le 07.01.25 car elle a été oublié
 - Temps est un minimum peut etre plus (pas pro)

## 22.11.2024

### Prof parle (30mins)

 - En gros il y a un icetools pour git

### Mouvement (60mins)

  - Mon cube bouge

### Bugfix

  - J'ai essaye de buxfix mon code

### RDV (135mins)

  - J'ai eu un RDV et j'ai du partir 

## 29.11.2024

### Bugfix Mouvement (20mins)

  - J'ai essaye de bugfix mon mouvement

### Evaluation avec Prof (80mins)

  - J'ai ete evalue par le prof
  - Le prof a regarde mon code et a fait des recommendations

### Bugfix Movement (25mins)

  - J'ai enfin resolut mon probleme de mouvement
  - J'ai ajoute un check pour pas pouvoir toucher les murs

### Cleanup (80mins)

  (note: ce commit c'est fait 2 fois, je ne sais pas pourquoi)

  - J'ai essaye de changer et metre le code dans snake.js 
  - (J'ai mis ce que j'ai changer dans le commit meme si je ne vais pas utiliser les changements)

## 06.12.24

### Preparation Portes Ouvertes (315mins)

  - La classe etait pas la on preparait les portes ouvertes de l'ETML

## 13.12.24

### Bugfix Mouvement (30mins) 

  - Le mouvement marche comme normal 

### Cleanup (10mins) [DONE]

  - J'ai realisé que mon code est moche donc j'ai enleve tout les commentaires du projet de base et rearrangé les bouts de code (Je peut retrouver les commentaires dans la base, ce n'est pas un probleme)

### Optimisation food.js (20mins) [DONE]

  - J'ai rendu mon code food.js plus efficace (par example, il y avait une fonction GetRandomPos qui servait a rien)
  - Implementation de grid 

### Fait snake (60mins) [DONE]

- Je me suis reseigné et j'ai implementé de la logique de snake
- (Ajout de collision entre pomme et snake, snake deviens plus grand, snake bouge avec son corps)
- Le code n'est pas a son bon fichier, j'ai deja fait un code qui marche, je le rearangerait quand il sera fini

### Optimisation Controles (10mins) [DONE]

  - Mon code de controles etait trops long, je l'ai raccouci de 100+ lignes a 22 (pas mal)

### Bugfix vitesse (15mins) [DONE]

  - La vitesse avait 0 consistence j'ai du un peut bouger les intervales, rien de complique

## MD/ Journal de travail (20mins)

  - J'ai oublie de faire les descriptions de ce que j'ai fait mon journal de travail .md (et donc des commits)
  - Tout entre cleanup et cette entrée sera donc sur un commit
  - Pas proffessionel desolé mr Carrel

## 20.12.24

### note: 
  - Commit fait pendant P_Prod 07.01.2025
  - Le temps de gitjournal etait faux dans le commit donc j'ajoute 150 minutes (245 - 95) 

### Setup Secret Santa (15mins)

  - On a dépose tout les cadeaux secret santa

### Tweaks CSS/ HTML (50mins) [DONE]

  - J'ai changé le CSS pour que il soit plus beau
  - Je me suis renseigné sur les translations CSS
  - J'ai ajouté un score qui est dans le canvas

### Head Bugfix (45mins) [DONE]

  - La tete ne se mettait pas a jour et restait a {x: 200, y: 200}
  - J'ai fait que elle se met a jour, donc les collisions marchent toutes
  - Je fait le score et un ecran de gameOver en prochain
  - Le bug est super facile a voire maintentant que je l'ai fix mais ca a pris beaucoup de temps a trouver

### Add Score / Gameover (30mins) [DONE]

  - J'ai ajoute des detections gameOver
  - J'ai ajoute la fonction DrawScore() qui marche pour changer le score
  - NEXT: je vais faire des changements QOL (tete de couleur differente, menu, ecran de gameOver)

### QOL changes (1h) [DONE]

  - J'ai fait un footer 
  - Je me suis renseigné sur le JSDOC
  - J'ai fait la documentation JSDOC
  - J'ai fait que le snake commence avec 3 segments
  - Ajouté un timer et bouge le score
  - NEXT: menu game over + boutton restart

### Secret Santa (45mins) [DONE]

  - On va faire le secret santa
  - Bonne Vacances :D

## 10.01.24

### Amelioration ecran de gameover (45mins) [DONE]

  - L'ecran de gameover n'est plus que un alert("game over");
  - Maintenant, l'ecran s'assombit, puis le programme ecrit "Game Over" avec le score et le temps de la partie
  - NEXT: faire le fichier config.json qui contient tout les constantes 