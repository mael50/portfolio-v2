---
title: "Installer le CLI de Lighthouse pour Générer des Rapports sur les Sites Web"
date: "2025-03-27"
readTime: 3
tags: ["Lighthouse", "CLI", "Rapports"]
image: "/images/blog/lighthouse-cli-banner.png"
description: "Apprenez à installer le CLI de Lighthouse et à générer des rapports de performance pour vos sites web."
---

# Installer le CLI de Lighthouse pour Générer des Rapports sur les Sites Web

Lighthouse est un outil open-source automatisé pour améliorer la qualité des pages web. Vous pouvez l'exécuter sur n'importe quelle page web, publique ou nécessitant une authentification. Il dispose de plusieurs audits pour la performance, l'accessibilité, les pratiques recommandées, et plus encore.

## Prérequis

Avant de commencer, assurez-vous d'avoir Node.js installé sur votre machine. Vous pouvez télécharger Node.js depuis [le site officiel](https://nodejs.org/).

## Installation du CLI de Lighthouse

1. **Ouvrez votre terminal** et exécutez la commande suivante pour installer Lighthouse globalement sur votre machine :

    ```bash
    npm install -g lighthouse
    ``` 

2. **Vérifiez l'installation** en exécutant la commande suivante :

    ```bash
    lighthouse --version
    ```

    Vous devriez voir la version de Lighthouse installée.

## Générer un Rapport Lighthouse

Pour générer un rapport Lighthouse, utilisez la commande suivante en remplaçant `https://example.com` par l'URL de votre site web :

```bash
lighthouse https://example.com --output html --output-path ./report.html
```

Cette commande générera un rapport HTML dans le répertoire courant.

## Changer le Chemin de Sortie par Défaut

Vous pouvez changer le chemin de sortie par défaut en utilisant un alias. Par exemple, pour enregistrer les rapports dans un répertoire spécifique avec un nom de fichier basé sur l'URL et la date, vous pouvez ajouter l'alias suivant à votre fichier de configuration de shell (`.bashrc`, `.zshrc`, etc.) :

```bash
alias lighthouse='f() { lighthouse "$1" --output html --output-path ~/path/to/your/reports/$(echo "$1" | sed "s/[^a-zA-Z0-9]/_/g")_$(date +%Y-%m-%d_%H-%M-%S).html; }; f'
```

Remplacez `~/path/to/your/reports/` par le chemin où vous souhaitez enregistrer vos rapports.

## Conclusion

Vous savez maintenant comment installer le CLI de Lighthouse et générer des rapports de performance pour vos sites web. Utilisez ces rapports pour identifier les points à améliorer et optimiser vos pages web.

Pour plus d'informations, consultez la [documentation officielle de Lighthouse](https://developers.google.com/web/tools/lighthouse).