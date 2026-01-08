import { useState, useRef, useEffect } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, ArrowRight, BookOpen, Crown, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const quickSuggestions = [
  "Comprendre mes résultats",
  "Aménagements au travail",
  "Préparer une consultation",
  "Ressources TSA/TDAH",
];

export default function Pzy() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponses: Record<string, string> = {
        "Comprendre mes résultats":
          "Je vois que vous souhaitez mieux comprendre vos résultats. D'après votre profil, vous présentez des traits HPI marqués (72%) avec quelques caractéristiques TDA/TDAH. Cela suggère une pensée rapide et créative, parfois accompagnée de difficultés de concentration. Voulez-vous que je vous explique un axe en particulier ?",
        "Aménagements au travail":
          "Pour les aménagements au travail, plusieurs options sont possibles : environnement calme, tâches variées, pauses régulières, communication claire des attentes. Souhaitez-vous des conseils spécifiques pour votre profil HPI/TDA ?",
        "Préparer une consultation":
          "Pour préparer une consultation avec un professionnel, je vous conseille de noter vos principales difficultés, vos questions, et d'apporter vos résultats Psy-Easy. Voulez-vous que je vous aide à structurer cette préparation ?",
        "Ressources TSA/TDAH":
          "Voici quelques ressources utiles : articles de notre bibliothèque, associations spécialisées, et ouvrages recommandés. Quel type de ressource vous intéresse le plus ?",
      };

      const defaultResponse =
        "Je suis P-zy, l'assistant IA de Psy-Easy. Je suis là pour vous aider à comprendre votre profil et vous accompagner dans votre parcours. Comment puis-je vous aider ?";

      const botMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: botResponses[messageText] || defaultResponse,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const showCTAs = messages.length >= 4;

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        {/* Chat Header */}
        <div className="border-b-2 border-foreground p-6 bg-background">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">P-zy</h1>
              <p className="text-sm text-muted-foreground">
                L'assistant IA. Essec ides su sintoccaecaé min volu aute qu'un utlabo eufugié.
              </p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Bot className="h-16 w-16 mb-4 text-muted-foreground" />
              <h2 className="text-xl font-bold mb-2">
                Bonjour, qu'est-ce qui vous préoccupe en ce moment ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                Je suis P-zy, votre assistant personnel. Posez-moi vos questions sur votre profil, 
                vos résultats ou les démarches à suivre.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {quickSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSend(suggestion)}
                    className="quick-chip"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`chat-bubble animate-slide-up ${
                    message.role === "user" ? "chat-bubble-user" : "chat-bubble-bot"
                  }`}
                >
                  {message.content}
                </div>
              ))}

              {isTyping && (
                <div className="chat-bubble chat-bubble-bot animate-pulse-subtle">
                  P-zy réfléchit...
                </div>
              )}

              {/* Contextual CTAs after a few messages */}
              {showCTAs && !isTyping && (
                <div className="border-2 border-foreground rounded-lg p-4 bg-accent/30 space-y-3 animate-slide-up">
                  <p className="text-sm font-medium">Ressources suggérées :</p>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/articles">
                      <Button variant="outline" size="sm" className="gap-2">
                        <BookOpen className="h-4 w-4" />
                        Lire les articles
                      </Button>
                    </Link>
                    <Link to="/premium">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Crown className="h-4 w-4" />
                        Rapport Premium
                      </Button>
                    </Link>
                    <Link to="/partenaires">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Users className="h-4 w-4" />
                        Trouver un partenaire
                      </Button>
                    </Link>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t-2 border-foreground p-4 bg-background">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écrivez votre message..."
              className="flex-1 border-2"
              disabled={isTyping}
            />
            <Button type="submit" disabled={!input.trim() || isTyping}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
          
          {messages.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {quickSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSend(suggestion)}
                  className="text-xs px-3 py-1 border border-border rounded-full hover:border-foreground transition-colors"
                  disabled={isTyping}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
