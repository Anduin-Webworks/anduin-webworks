import { useState } from "react";
import { Phone, Mail, Linkedin, Send, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsModalOpen(false);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-chakra text-4xl lg:text-5xl font-medium mb-12 animate-slide-up">
          Contact
        </h2>

        <div className="space-y-4 text-lg lg:text-xl font-light animate-fade-in">
          <p className="flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            WhatsApp:{" "}
            <a
              href="https://api.whatsapp.com/send?phone=553195117017"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors"
            >
              +55 31 9511-7017
            </a>
          </p>
          <p className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            Email: support@anduin-webworks.atlassian.net
          </p>
          <p className="flex items-center justify-center gap-3">
            <Linkedin className="w-5 h-5 text-primary" />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/ofilipelima/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors"
            >
              /in/ofilipelima/
            </a>
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 px-8 py-4 rounded-2xl font-medium text-lg text-foreground border border-border hover:border-primary hover:text-primary transition-all duration-300"
          style={{ background: "var(--gradient-button)" }}
        >
          <span className="flex items-center gap-2">
            <Send className="w-5 h-5" />
            Send a Message
          </span>
        </button>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-md shadow-xl animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-chakra text-2xl font-semibold">
                Send Message
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-destructive" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
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
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
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
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-medium text-lg text-foreground transition-all duration-300 hover:opacity-90"
                style={{ background: "var(--gradient-button)" }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
