## Chaque type comme le type 'Task' doit avoir une logique métier, ici c'est TaskRepository
## Chaque 'écran' ou menu est une fonction dans `main.ts`

Une maintenance évolutive est nécessaire pour ajouter la fonctionnalité de suppression de tâche, donc le TaskRepository doit évoluer
Créer un menu de suppression dans `main.ts`

Impossible d'importe le module `fs` pour l'ecriture dans un fichier JSON