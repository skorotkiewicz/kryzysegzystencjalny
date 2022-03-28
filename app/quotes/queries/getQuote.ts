import { resolver } from "blitz"

export default resolver.pipe(() => {
  const quotes = [
    "Często mówi się, że zanim umrzesz, twoje życie przemija przed twoimi oczami. W rzeczywistości jest to prawda. Nazywa się to życiem",
    "Człowiek przed śmiercią zawsze myśli o przeszłości, jakby gorączkowo szukał dowodu na to, że żył",
    "Nie ma wstydu umierać za nic. Dlatego właśnie większość ludzi umiera.",
    "W całym życiu są tylko dwa dni, które nie mają 24 godzin",
    "I pewnego dnia okazuje się, że masz za sobą dziesięć lat. Nikt nie powiedział ci, kiedy masz biec, nie zdążyłeś wystartować. Biegniesz i biegniesz, żeby dogonić słońce, ale ono tonie. Ściga się, by znów znaleźć się za tobą. Słońce jest względnie takie samo, ale ty jesteś starszy. Masz krótszy oddech i o jeden dzień bliżej do śmierci",
    "Czy wszystko, co widzimy i co się nam wydaje, jest tylko snem w śnie?",
    "Skoro wszyscy umrzemy, to oczywiste jest, że to, kiedy i jak, nie ma znaczenia",
    "Jest jedna rzecz, która jest dla mnie oczywista: nikt nie umiera z godnością",
    "Życie nie ma sensu. Wiedząc o tym, bądź szczęśliwy, bądź nieszczęśliwy, albo jedno i drugie. Możesz spróbować wszystkiego, ale nic nie sprawi, że staniesz się kimś, bo nie jesteśmy niczym",
    "Nigdy już nie będziesz tak młody.",
    "tygrys musi polować, ptak musi latać, człowiek musi siedzieć i zastanawiać się, dlaczego? dlaczego? tygrys musi spać, ptak musi lądować, człowiek musi wmawiać sobie, że rozumie",
    "Napadły mnie wspomnienia z życia, które nie było już moje, ale w którym znajdowałem najprostsze i najtrwalsze radości: zapachy lata, część miasta, którą kochałem, pewne wieczorne niebo, sukienki Marie i sposób, w jaki się śmiała",
    "Każda istniejąca rzecz rodzi się bez powodu, przedłuża się ze słabości i umiera przez przypadek",
    "Życie nie ma sensu w chwili, gdy traci się złudzenie, że jest wieczne",
    "Wszystkie ludzkie działania są równoważne. Wszystkie są z zasady skazane na porażkę",
    "Czas jest zbyt duży. Nie można go zapełnić. Wszystko, co się w nim pogrąża, ulega rozciągnięciu i rozpada się",
    "Cała praca wszystkich wieków, całe poświęcenie, całe natchnienie, cały blask geniuszu ludzkiego są skazane na zagładę",
    "A jednak czasami stajemy się osobą, której najbardziej się boimy. A może najbardziej boimy się osoby, o której wiemy, że ma się nią stać",
    "Każdy, kogo spotkasz, umrze. Po kilkudziesięciu latach od twojej śmierci ludzie o tobie zapomną",
    "Nie znaleźliśmy jeszcze żadnego empirycznego dowodu na istnienie świadomości. Jest bardzo prawdopodobne, że nikt z nas tak naprawdę nie żyje, a umieranie i zasypianie to z praktycznego punktu widzenia dokładnie to samo",
    "Spowodowanie narodzin to spowodowanie śmierci",
    "Na wystarczająco długiej linii czasu wskaźnik przeżywalności wszystkiego spada do zera",
    "Proszę, obudź się, wszyscy bardzo za tobą tęsknimy",
    "Twoja pamięć stanie się abstrakcyjnym pojęciem - jeśli w ogóle przetrwa",
    "W pamięci pozostaną tylko plamy, gdy będziesz stać u śmierci bramy",
  ]

  // shuffle array
  const arr = quotes.sort(() => 0.5 - Math.random())
  const quote = arr[Math.floor(Math.random() * arr.length)]

  return quote
})
