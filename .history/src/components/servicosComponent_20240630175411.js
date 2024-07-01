import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    id: 1,
    name: "Volume Brasileiro",
    price: "R$180,00",
    info: "Técnica que adiciona volume e comprimento aos cílios naturais.",
    description: "O Volume Brasileiro é uma técnica avançada que cria um visual deslumbrante e volumoso. Ideal para quem deseja um olhar marcante e sofisticado.",
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    name: "Volume Diamante",
    price: "R$180,00",
    info: "Procedimento premium para um olhar deslumbrante e sofisticado.",
    description: "O Volume Diamante oferece um acabamento luxuoso e brilhante aos seus cílios. Perfeito para ocasiões especiais ou para quem busca um visual glamouroso no dia a dia.",
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    name: "Efeito Molhado",
    price: "R$190,00",
    info: "Cílios com aparência brilhante e úmida para um visual glamouroso.",
    description: "O Efeito Molhado cria a ilusão de cílios naturalmente úmidos e brilhantes. Ideal para um olhar sedutor e fresco, perfeito para o verão ou eventos noturnos.",
    image: "/api/placeholder/300/200"
  }
];

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#FFF8F2] rounded-lg shadow-lg overflow-hidden">
      <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#333333] mb-2">{service.name}</h3>
        <p className="text-[#CD853F] font-bold mb-2">{service.price}</p>
        <p className="text-[#C09C81] text-sm mb-4">{service.info}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-[#333333] font-semibold"
        >
          {isExpanded ? 'Menos detalhes' : 'Mais detalhes'}
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isExpanded && (
          <p className="mt-4 text-[#C09C81] text-sm">{service.description}</p>
        )}
      </div>
    </div>
  );
};

const EyelashServicesComponent = () => {
  return (
    <div className="bg-[#FFF8F2] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-[#333333] mb-8">
          Nossos Serviços de Cílios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EyelashServicesComponent;