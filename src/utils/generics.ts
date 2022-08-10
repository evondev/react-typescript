function simpleUseState<T>(val: T): [() => T, (v: T) => void] {
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}
const [strGetter, strSetter] = simpleUseState("evondev");
console.log(strGetter()); // evondev
strSetter("Developer");
console.log(strGetter()); // Developer
const [strGetter2, strSetter2] = simpleUseState(100);
console.log(strGetter2()); // 100
strSetter2(200);
console.log(strGetter2()); // 200
// const [strGetter3, strSetter3] = simpleUseState(true);
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}
function ranker<RankItem>(
  items: RankItem[],
  rankCallBack: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rankCallBack(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}
const languages: {
  name: string;
  dificutly: number;
}[] = [
  {
    name: "ReactJS",
    dificutly: 60,
  },
  {
    name: "Angular",
    dificutly: 80,
  },
  {
    name: "Vue",
    dificutly: 70,
  },
];
// console.log(ranker([1, 2, 3, 4, 5], (number) => number * 5));
const rank = ranker(languages, ({ dificutly }) => dificutly);
console.log("rank", rank);
// [1,2,3,4,5] (v) => v * 5
