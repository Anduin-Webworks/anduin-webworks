import { useState } from "react";
import { Phone, Mail, Linkedin, Send, X, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsModalOpen(false);
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

  return (
    <section id="contact" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-cinzel text-4xl lg:text-5xl font-bold mb-12 animate-slide-up">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="space-y-4 font-outfit text-lg lg:text-xl font-light animate-fade-in">
          <p className="flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            WhatsApp:{" "}
            <a
              href="https://api.whatsapp.com/send?phone=553195117017"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              +55 31 9511-7017
            </a>
          </p>
          <p className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            Email:{" "}
            <a
              href="mailto:support@anduin-webworks.atlassian.net?subject=Hello%20from%20your%20website&body=Hi%2C%0A%0AI%20found%20your%20website%20and%20would%20like%20to%20get%20in%20touch.%0A%0A"
              className="underline hover:text-primary transition-colors"
            >
              support@anduin-webworks.atlassian.net
            </a>
          </p>
          <p className="flex items-center justify-center gap-3">
            <Linkedin className="w-5 h-5 text-primary" />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/ofilipelima/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              /in/ofilipelima/
            </a>
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 px-8 py-4 rounded-xl font-outfit font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ background: "var(--gradient-cta)", color: "hsl(var(--background))" }}
        >
          <span className="flex items-center gap-2">
            <Send className="w-5 h-5" />
            Send a Message
          </span>
        </button>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-2xl p-6 w-full max-w-md shadow-xl animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-cinzel text-2xl font-semibold">
                Send Message
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
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
                  maxLength={120}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  maxLength={120}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ background: "var(--gradient-button)", color: "hsl(var(--foreground))" }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
