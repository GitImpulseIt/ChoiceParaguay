<?php

require_once __DIR__ . '/vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/src/templates');
$twig = new \Twig\Environment($loader, [
    'cache' => false,
    'debug' => true,
]);

$team = [
    [
        'name'     => 'Jazmin Von Poleski',
        'role'     => 'Asesora de Inversiones',
        'photo'    => '/src/img/jazmin.jpg',
        'whatsapp' => '595985429202',
        'phone'    => '0985 429 202',
    ],
    [
        'name'     => 'Noemi Romero',
        'role'     => 'Asesora de Inversiones',
        'photo'    => '/src/img/noemi.jpg',
        'whatsapp' => '595983421202',
        'phone'    => '0983 421 202',
    ],
];

$projects = [
    ['name' => 'Aires de Gaulle',       'category' => 'pozo'],
    ['name' => 'VTower Boggiani',       'category' => 'pozo'],
    ['name' => 'V Tower Recoleta',      'category' => 'pozo'],
    ['name' => 'V Tower Fernando',      'category' => 'pozo'],
    ['name' => 'V Tower Del Lago',      'category' => 'pozo'],
    ['name' => 'V Tower Riviera',       'category' => 'pozo'],
    ['name' => 'Solana 1 y 2',          'category' => 'pozo'],
    ['name' => 'Narciso',               'category' => 'pozo'],
    ['name' => 'Hype',                  'category' => 'pozo'],
    ['name' => 'Civis X',               'category' => 'pozo'],
    ['name' => 'Civis XI',              'category' => 'pozo'],
    ['name' => 'Urban',                 'category' => 'pozo'],
    ['name' => 'Star',                  'category' => 'pozo'],
    ['name' => 'Unico',                 'category' => 'terminado'],
    ['name' => 'Houze',                 'category' => 'terminado'],
    ['name' => 'Zentrum',               'category' => 'terminado'],
    ['name' => 'In 1362 Molas',         'category' => 'terminado'],
    ['name' => 'Hit',                   'category' => 'terminado'],
    ['name' => 'Civis Aether',          'category' => 'lanzamiento'],
];

echo $twig->render('home.twig', [
    'team'     => $team,
    'projects' => $projects,
]);
