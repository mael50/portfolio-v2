---
title: "Déployer une application Symfony avec Coolify"
date: "2024-10-15"
readTime: 3
tags: ["Symfony", "Coolify", "Déploiement", "DevOps"]
image: "/images/blog/symfony-coolify-banner.png"
description: "Apprenez à déployer une application Symfony en utilisant Coolify, une plateforme de déploiement moderne et facile à utiliser."
---

# Tutoriel Symfony

Symfony est le principal framework PHP pour créer des sites web et des applications web. Il est construit sur les composants Symfony, qui sont réutilisables et modulaires.

## Prérequis

Avant de commencer, assurez-vous de configurer les éléments suivants :

- Définir **Build Pack** sur `nixpacks`
- Définir `APP_ENV` pour spécifier l'environnement de l'application (par exemple, `prod` pour production)
- Définir `APP_SECRET` pour la sécurité de l'application
- Définir `NIXPACKS_PHP_FALLBACK_PATH` sur `/index.php` pour indiquer le point d'entrée par défaut
- Définir `NIXPACKS_PHP_ROOT_DIR` sur `/app/public` pour spécifier le répertoire racine de l'application
- Définir **Ports Exposés** sur `80` pour exposer le port HTTP

## Migrations de Base de Données

Si vous utilisez Doctrine pour la gestion de votre base de données, vous pouvez ajouter le script suivant après le déploiement pour appliquer les migrations :

```bash
php bin/console doctrine:migrations:migrate --all-or-nothing --no-interaction
```

Ce script exécute les migrations de base de données en mode non interactif et garantit que toutes les migrations sont appliquées ou aucune (all-or-nothing).

## Autres Composants

Si votre application nécessite des services supplémentaires comme une base de données ou Redis, vous pouvez les créer au préalable dans le tableau de bord Coolify. Vous recevrez les chaînes de connexion à utiliser dans votre application en tant que variables d'environnement.

### Chaîne de Connexion à la Base de Données

Utilisez la chaîne de connexion suivante pour PostgreSQL :

```plaintext
DATABASE_URL=postgresql://app:!ChangeMe!@127.0.0.1:5432/app?serverVersion=16&charset=utf8
```

Remplacez `!ChangeMe!` par le mot de passe de votre base de données.

### Détails de Connexion Redis

Pour Redis, utilisez les détails de connexion suivants :

```plaintext
REDIS_HOST=<REDIS_HOST>
REDIS_PASSWORD=null
REDIS_PORT=6379
```

Remplacez `<REDIS_HOST>` par l'adresse de votre serveur Redis.

## Proxy de Confiance

Vous devrez peut-être configurer les paramètres de proxy de confiance si votre application est derrière un proxy inverse. Pour ce faire :

- Définir la variable d'environnement `TRUSTED_PROXIES` avec l'IP de votre serveur proxy
- Ajouter la configuration suivante dans Symfony :

Fichier : `config/packages/framework.yaml`

```yaml
framework:
    trusted_proxies: "%env(TRUSTED_PROXIES)%"
    trusted_headers: ['x-forwarded-for', 'x-forwarded-host', 'x-forwarded-proto', 'x-forwarded-port', 'x-forwarded-prefix']
```

Cette configuration permet à Symfony de faire confiance aux en-têtes HTTP fournis par le proxy inverse, ce qui est essentiel pour la gestion correcte des requêtes HTTP.