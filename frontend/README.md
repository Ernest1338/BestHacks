# Informacje o kontrybucji

## Budowanie

```
npm install # instalacja modułów
npm run dev
npm run dev -- --open # żeby otworzyć od razu nową kartę
```

## Wskazówki

- w **/lib/index.ts** trzymamy utile
- w **/lib/objects.ts** trzymamy szablony obiektów otrzymywanych z bazy danych
- **/src/app.scss** służy do globalnych stylów + importów (np. czcionek) a **/src/variables.scss** do przychowywania np. kolorów w zmiennych globalnych
- **/lib/assets/** to folder z assetami na stronę, można pobierać linki za pomocą utila **assets** w index.ts
    więc jak chcesz np. zdjęcie wyświetlić to tak
    ```
    <img src="{assets.getAssetUrl('test.png')}" alt="test">
    ```
- grupy w svelcie (np. (main), (forms) ) dzielą logicznie z jakiego +layout.svelte korzystają pliki
- ip do backendu można skonfigurować w **/lib/index.ts**, zmienna backendIP
- w każdym **+layout.svelte** opakowujemy cały html w <div class="app"></div>, żeby można było stylować content
- proszę Cię Grzesiek pisz w css klasy (.klasa) zamiast id (#id) xd