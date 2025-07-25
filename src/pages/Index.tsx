import RecommendationForm from "@/components/RecommendationForm";
import ClothingRecommendationForm from "@/components/ClothingRecommendationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Quick <span className="text-white/90">Recs</span>
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-widest text-foreground mb-6">
            STYLE
            <br />
            <span className="font-light">SUBMISSIONS</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Drop your favorite movies, songs, or ideas. Get instant credit via your TikTok handle.
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto font-light tracking-wide leading-relaxed">
            Submit clothing recommendations.
            <br />
            Brands, pieces, trends—anything style related.
          </p>
        </div>
        
        <div className="flex justify-center">
          <RecommendationForm />
          <ClothingRecommendationForm />
        </div>
        
        <div className="text-center mt-8 text-white/60 text-sm">
          Submissions go straight to Discord • No signup required
        <div className="text-center mt-12 text-muted-foreground/60 text-xs tracking-widest font-mono">
          INSTANT DISCORD INTEGRATION • NO REGISTRATION
        </div>
      </div>
    </div>
  );
};

export default Index;
