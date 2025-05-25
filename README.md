# Astro teknisk dokumentation for Eksamnens gruppeprojekt

Her står vores fælles navngivning, retningslinjer samt filstruktur for dette projekt.

````
## 🚀 Projekt struktur

Inde i dette atroprojekt vil du se følgende mappeopdelinger, filstruktureringer og navnguivninger.

```text
/
├── public/
│   └── beer-card_images/
│   │   └── (Her gammes billeder til produktkort)
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── (Her gammes andre relevante assets)
│   ├── components/
│   │   └── (Her gammes alle components)
│   ├── css/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── products/
│       │   └── [slug].astro
│       └── index.astro
│       └── products.astro
└── package.json

````

## Fontvalg og styling

Fonte bliver hentet via google fonts embed kode og derefter bliver indhentet i layout header.
Overordnet styling eks. globale stylesheet, layout, farver osv. ændres ikke i en individuel branch, medmindre andet bliver aftalt internet mellem gruppens medlemmer.

## Supabase

Siden tager brug af database til indhentning af data på dele af siden.
eks.
productcard.astro = hvor vi her mapper et produktkorts enkelte struktur ud.

productgrid.astro = fetcher databasens indhold, tager brug af strukturen gemt i atro.props og mapper dataen ud, så du får flere en et enkelt kort mappet.

## Navngivning

```
Filer bliver navngivet på baggrund af hvad den enkelte fil/component skal bruges til eller er. Så hvis man eks. sidder og koder et component der skal være headeren. så vil vi her kalde den header.astro.
```

## Branches og commits

Branches bliver navngivet beskrivende med start af eks. bugfix* , feature* eller add\_ efterfuldt af hvad branchen omhandler. eks. hvis jeg skal adde produktkort ville den hedde add_productcard.

commits bliver navngivet mere løst men skal starte med added_efterfuldt af hvad det gældende genrelt omhandler. eks. hvis jeg skulle adde styling inde i productkort branchen ville jeg sige added_styling og commite.

## Arbejdsflow

Vi aftaler internt, hvem der arbejder på hvilke komponenter og sider.
Hver enkelte i gruppen arbejder udelukkende på egne komponenter, og arbejder ikkepå tværs, medmindre andet er aftalt. Alle arbejder fra deres egen branch og aldrig direkte i main eller andres branches, så vi overholder en generel struktureret arbejdsprocess.
