import { useState } from "react";
import { X, Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

const ContactModal = ({ isOpen, onClose, selectedPlan }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Include selected plan in the message if provided
    const messageWithPlan = selectedPlan
      ? `[Selected Plan: ${selectedPlan}]\n\n${formData.message}`
      : formData.message;

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { ...formData, message: messageWithPlan },
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      onClose();
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-2xl p-6 w-full max-w-md shadow-xl animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-cinzel text-2xl font-semibold">
              Get Started
            </h3>
            {selectedPlan && (
              <Badge variant="secondary" className="mt-2">
                {selectedPlan} Package
              </Badge>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-card rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-destructive" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 font-outfit">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              required
              maxLength={100}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              maxLength={255}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              required
              rows={4}
              maxLength={5000}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell us about your project or ask a question..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-primary text-primary-foreground"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
