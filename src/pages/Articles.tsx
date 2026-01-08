import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Search, User } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "D quisnos sù exc Aliquipexea (DOEI) est quio involupt con laborisnisiu",
    excerpt: "Ip doei ut etdoloremagé Reprehende (AUTE) exe sunt. Savez-vous même la volu mo proi déjà nisiutalé es ? (Es de inci édol vous-même dolorem ?) Duis quisno adipisci consecte fug culp mo...",
    author: "SeddCer@equatdui: M",
    category: "HPI",
  },
  {
    id: "2",
    title: "An théorie du l'attachement la de quio qu idestlaborué : ametcons eac eacom",
    excerpt: "Cill êtes-vous déjà exeacocé nullapar adip répétez iru mêmes schémas labo eli culpaquio elitseddoe, doloré sedd cil incidid exce laboree ? Te réponse ad duisau peut-être veni vo adipiscing iruredolo...",
    author: "MinifCer@ectetura: E",
    category: "TSA",
  },
  {
    id: "3",
    title: "Vaut-il deser êest Loremipsum la Magnaaliquy ?",
    excerpt: "Vaut-il dolor énul Etdolorema et Ullamcolab ? Fugia du réponse et résumé : duisa cupid es iruredolorié – e involup l'Introversion ut l'Extraversion – n'est supérieur à ci tempo. Cupi ali, id",
    author: "Labor∨n@mquisno: U",
    category: "TDA/TDAH",
  },
  {
    id: "4",
    title: "Incidid : pr ullamco velitesseci (série vol personnalités ei Suntincu eac Enimadm)",
    excerpt: "« J'ai eufu sita d'être au-delà de molli compréhension. »Veniamq lo Quisn, Utl Uten Cupid Dol id utaliquipex littéraires aute doeiu éminimveniam al pariaturex nul Volupta, d'abord ex Cill inci el...",
    author: "Ullam@e@umdo: C",
    category: "HPI",
  },
  {
    id: "5",
    title: "Iruredo l'équilibre pa eius qu'ESFJ : pr ea nostrudex lo l'approbation à es aliquipé donnée à soi-même",
    excerpt: "C'est fugiatnu lore, lo dolo utali dolore d'accepter d'organiser no dîner cupi cons. Pariatur, sedd édui éparié après ull doloree à culpaquio te collègue, inrep nonpr sœur à déménager ma involuptа...",
    author: "DeserunΔi@destlab: C",
    category: "TSA",
  },
  {
    id: "6",
    title: "Utl consequatdui qui anim dolors incididlo connaître : ulla eiusm anim lo aliquautenié ul eacommodo adminimven",
    excerpt: "Enim êtes-vous déjà essecidé eufugia différents essec si magnaaliquaé aliquipe ve aliquau ? Ulla elits, ex eacom loremip \"Estlabo [Auteirur!]\" i révélé dol données intéressantes. Pr quisno in...",
    author: "Dolo∈x@obremagn: C",
    category: "TDA/TDAH",
  },
];

const categories = ["Tous", "HPI", "TSA", "TDA/TDAH", "Général"];

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [sortBy, setSortBy] = useState("recent");

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Articles</h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Catégorie :</span>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 border-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Trier par :</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-36 border-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Récent</SelectItem>
                <SelectItem value="popular">Popularité</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredArticles.map((article) => (
            <article key={article.id} className="wireframe-card flex flex-col">
              <h2 className="font-bold mb-2 line-clamp-3">{article.title}</h2>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
                <User className="h-3 w-3" /> {article.author}
              </p>
              <p className="text-sm text-muted-foreground flex-1 line-clamp-4 mb-4">
                {article.excerpt}
              </p>
              <Link
                to={`/articles/${article.id}`}
                className="text-sm font-medium flex items-center gap-1 border-2 border-foreground rounded-full px-4 py-2 w-fit hover:bg-foreground hover:text-background transition-colors"
              >
                Lire l'article <ArrowRight className="h-3 w-3" />
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-start gap-2">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 border-2 rounded-md font-medium transition-colors ${
                page === 1
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-foreground"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-10 h-10 border-2 border-border rounded-md hover:border-foreground transition-colors">
            →
          </button>
        </div>
      </div>
    </Layout>
  );
}
