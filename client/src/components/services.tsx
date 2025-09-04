import { motion } from "framer-motion";
import {
  Compass,
  Factory,
  Settings,
  Lightbulb,
  Calculator,
  FileCheck,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Projetos Mecânicos",
    description: "Desenvolvimento de projetos mecânicos completos utilizando SolidWorks e AutoCAD, desde o conceito até a documentação técnica.",
    features: ["Modelagem 3D", "Desenhos técnicos", "Análise estrutural"],
    color: "bg-blue-600"
  },
  {
    icon: Factory,
    title: "Consultoria Industrial",
    description: "Análise e otimização de processos industriais, identificação de gargalos e implementação de melhorias para aumentar a eficiência.",
    features: ["Análise de processos", "Redução de custos", "Aumento de produtividade"],
    color: "bg-orange-600"
  },
  {
    icon: Settings,
    title: "Manutenção Preditiva",
    description: "Implementação de sistemas de manutenção preditiva para evitar paradas não programadas e aumentar a vida útil dos equipamentos.",
    features: ["Análise vibracional", "Termografia", "Monitoramento contínuo"],
    color: "bg-green-600"
  },
  {
    icon: Lightbulb,
    title: "Desenvolvimento de Produtos",
    description: "Criação e desenvolvimento de novos produtos mecânicos, desde a concepção até a produção, incluindo prototipagem.",
    features: ["Design conceitual", "Prototipagem", "Testes e validação"],
    color: "bg-purple-600"
  },
  {
    icon: Calculator,
    title: "Análise por Elementos Finitos",
    description: "Simulações computacionais avançadas para análise estrutural, térmica e de fluidos, garantindo segurança e performance.",
    features: ["Análise estrutural", "Análise térmica", "CFD (Dinâmica dos fluidos)"],
    color: "bg-red-600"
  },
  {
    icon: FileCheck,
    title: "Laudos Técnicos",
    description: "Elaboração de laudos técnicos para equipamentos, estruturas e processos, atendendo às normas técnicas e regulamentações.",
    features: ["Inspeção de equipamentos", "Avaliação de conformidade", "Relatórios técnicos"],
    color: "bg-indigo-600"
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossos <span className="text-primary dark:text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas em engenharia mecânica para empresas de todos os portes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                <service.icon className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>

              <ul className="space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
