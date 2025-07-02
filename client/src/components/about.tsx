import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Engenheiro trabalhando com projetos" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Sobre <span className="text-primary dark:text-primary">João Silva</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Engenheiro Mecânico formado pela UFSC com mais de 8 anos de experiência em projetos industriais, 
              desenvolvimento de produtos e otimização de processos.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                  <GraduationCap className="text-white text-sm" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Formação Acadêmica</h3>
                  <p className="text-gray-600 dark:text-gray-300">Mestrado em Engenharia Mecânica - UFSC (2018)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                  <Briefcase className="text-white text-sm" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Experiência Profissional</h3>
                  <p className="text-gray-600 dark:text-gray-300">Mais de 50 projetos entregues em diversos setores industriais</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                  <Award className="text-white text-sm" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Certificações</h3>
                  <p className="text-gray-600 dark:text-gray-300">CREA-SC ativo, Certificação SolidWorks Professional</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
