import React, { useState } from 'react';
import { Sparkles, Eye, Scissors, X } from 'lucide-react';

const ServicosComponent = () => {
  const [selectedService, setSelectedService] = useState(null);

  const serviceCategories = [
    {
      title: "Extensão de Cílios",
      icon: Eye,
      services: [
        { name: "Volume Brasileiro", price: "R$180,00", info: "Técnica que adiciona volume e comprimento aos cílios naturais." },
        { name: "Volume Diamante", price: "R$180,00", info: "Procedimento premium para um olhar deslumbrante e sofisticado." },
        { name: "Volume Brown fio marrom", price: "R$200,00", info: "Extensões em tom marrom para um visual mais natural e suave." },
        { name: "Efeito Sirena", price: "R$150,00", info: "Extensão no canto externo para um olhar alongado e sedutor." },
        { name: "Efeito Molhado", price: "R$190,00", info: "Cílios com aparência brilhante e úmida para um visual glamouroso." },
        { name: "Fox Eyes", price: "R$220,00", info: "Técnica que eleva o olhar, criando um efeito lifting nos olhos." },
      ]
    },
    {
      title: "Design de Sobrancelhas",
      icon: Scissors,
      services: [
        { 
          name: "Design de Sobrancelhas com Henna", 
          price: "R$50,00",
          info: "Design personalizado com aplicação de henna para um efeito duradouro.",
          description: "Higienização, esfoliação, tonificação, design personalizado, aplicação de henna, finalização com gel calmante e pasta mágica."
        },
        { 
          name: "Design de Sobrancelhas", 
          price: "R$40,00",
          info: "Modelagem precisa para realçar sua beleza natural.",
          description: "Higienização, esfoliação, tonificação, design personalizado, finalização com gel calmante e pasta mágica."
        },
      ]
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service === selectedService ? null : service);
  };

  return (
    <div className="bg-[#FFF8F2] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#333333] mb-4 animate-fade-in-down">
          Thalita Cristina Studio & Academy
        </h1>
        <p className="text-center text-[#C09C81] mb-12 animate-fade-in-up">Especialista no embelezamento do Olhar</p>
        
        {serviceCategories.map((category, index) => (
          <div key={index} className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#333333] mb-6 flex items-center justify-center">
              <category.icon className="mr-2" size={28} />
              {category.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service, serviceIndex) => (
                <div 
                  key={serviceIndex} 
                  className="bg-[#f8dbc5] rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-[#333333]">{service.name}</h3>
                      <span className="text-lg font-semibold text-[#CD853F]">{service.price}</span>
                    </div>
                    {selectedService === service && (
                      <div className="mt-4 text-[#C09C81] animate-fade-in">
                        <p className="mb-2">{service.info}</p>
                        {service.description && (
                          <p className="text-sm">{service.description}</p>
                        )}
                      </div>
                    )}
                    <button className="w-full bg-[#CE9D81] text-[#fff8f2] py-2 px-4 rounded-full font-semibold hover:bg-[#c09c81] transition duration-300 flex items-center justify-center mt-4">
                      <Sparkles className="mr-2" size={16} />
                      Agendar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-12 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-[#333333] mb-4">Formas de Pagamento</h3>
          <p className="text-[#C09C81]">Dinheiro, Pix, Cartão de Débito & Cartão de Crédito</p>
        </div>
      </div>
    </div>
  );
};

export default ServicosComponent;