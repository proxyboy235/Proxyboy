import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Shirt } from "lucide-react";

const ClothingRecommendationForm = () => {
  const [clothingRec, setClothingRec] = useState("");
  const [tiktokHandle, setTiktokHandle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!clothingRec.trim()) {
      toast({
        title: "Missing Information",
        description: "Please add your clothing recommendation.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace this URL with your actual Discord webhook
      const webhookUrl = "https://discord.com/api/webhooks/1395476436390772818/rqn2GNhsYAZ98-PckALqXl2noQ52TiaNxWY3b84jXj0rujMYHOBxXEzIFJ-gpxVw5oka";
      
      const payload = {
        embeds: [{
          title: "👕 New Clothing Recommendation",
          color: 0x000000, // Black color
          fields: [
            {
              name: "🔥 Clothing Recommendation",
              value: clothingRec,
              inline: false
            },
            ...(tiktokHandle ? [{
              name: "📱 TikTok Handle",
              value: `@${tiktokHandle.replace('@', '')}`,
              inline: true
            }] : [])
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Style Recs • Clothing Submissions"
          }
        }]
      };

      // Uncomment this when you have a real webhook URL
      // await fetch(webhookUrl, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(payload),
      // });

      // For demo purposes, simulate success
      await new Promise(resolve => setTimeout(resolve, 1200));

      toast({
        title: "Submitted ✓",
        description: "Your clothing recommendation has been sent.",
      });

      // Clear form
      setClothingRec("");
      setTiktokHandle("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md bg-card/90 backdrop-blur-glass border-border/50 shadow-2xl animate-scale-in">
      <CardHeader className="text-center space-y-3 pb-6">
        <div className="flex items-center justify-center gap-3">
          <Shirt className="h-6 w-6 text-foreground" />
          <CardTitle className="text-2xl font-light tracking-wider text-foreground">
            STYLE RECS
          </CardTitle>
        </div>
        <CardDescription className="text-muted-foreground font-light">
          Submit clothing brands, pieces, or style recommendations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="clothing" className="text-sm font-medium tracking-wide text-foreground/90">
              CLOTHING RECOMMENDATION
            </Label>
            <Textarea
              id="clothing"
              placeholder="Brand, specific item, style trend, etc..."
              value={clothingRec}
              onChange={(e) => setClothingRec(e.target.value)}
              className="min-h-[100px] resize-none bg-input border-border/30 focus:border-foreground/30 text-foreground placeholder:text-muted-foreground transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tiktok" className="text-sm font-medium tracking-wide text-foreground/90">
              TIKTOK HANDLE <span className="text-muted-foreground font-light">(OPTIONAL)</span>
            </Label>
            <Input
              id="tiktok"
              placeholder="@username"
              value={tiktokHandle}
              onChange={(e) => setTiktokHandle(e.target.value)}
              className="bg-input border-border/30 focus:border-foreground/30 text-foreground placeholder:text-muted-foreground transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-foreground/10 h-12"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground mr-2" />
                SUBMITTING
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                SUBMIT
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ClothingRecommendationForm;
