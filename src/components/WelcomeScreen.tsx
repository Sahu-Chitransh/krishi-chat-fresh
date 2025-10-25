interface WelcomeScreenProps {
  onSuggestionClick: (suggestion: string) => void;
}

const suggestions = [
  {
    title: "Crop recommendations",
    subtitle: "Get suggestions for best crops based on soil and season"
  },
  {
    title: "Pest identification",
    subtitle: "Upload photos to identify pests and diseases"
  },
  {
    title: "Weather insights",
    subtitle: "Get farming advice based on weather conditions"
  },
  {
    title: "Market prices",
    subtitle: "Check current crop prices and market trends"
  }
];

const WelcomeScreen = ({ onSuggestionClick }: WelcomeScreenProps) => {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-normal mb-4">
            <span className="text-foreground">Namaste, </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Farmer
            </span>
          </h1>
          <p className="text-3xl text-muted-foreground font-light">
            How can I help you today?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-up">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSuggestionClick(suggestion.title)}
              className="group text-left p-5 rounded-2xl bg-card hover:bg-muted/50 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-md"
            >
              <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {suggestion.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {suggestion.subtitle}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
