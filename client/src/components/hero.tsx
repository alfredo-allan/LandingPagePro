import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Download } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const headerHeight = 64;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Engenharia Mecânica
            <span className="text-primary dark:text-primary block">de Excelência</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Soluções inovadoras em projetos mecânicos, consultoria técnica e otimização de processos industriais. 
            Transformando ideias em realidade com precisão e expertise.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Baixar Portfolio
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
