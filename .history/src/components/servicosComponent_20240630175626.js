import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const services = [
  {
    id: 1,
    category: "Extensão de Cílios",
    name: "Volume Brasileiro",
    price: "R$180,00",
    info: "Técnica que adiciona volume e comprimento aos cílios naturais.",
    description: "O Volume Brasileiro é uma técnica avançada que cria um visual deslumbrante e volumoso. Ideal para quem deseja um olhar marcante e sofisticado. Manutenção de 15 dias: R$110,00. Manutenção de 21 dias: R$130,00.",
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    category: "Extensão de Cílios",
    name: "Volume Diamante",
    price: "R$180,00",
    info: "Procedimento premium para um olhar deslumbrante e sofisticado.",
    description: "O Volume Diamante oferece um acabamento luxuoso e brilhante aos seus cílios. Perfeito para ocasiões especiais ou para quem busca um visual glamouroso no dia a dia. Manutenção de 15 dias: R$110,00. Manutenção de 21 dias: R$130,00.",
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    category: "Extensão de Cílios",
    name: "Volume Brown fio marrom",
    price: "R$200,00",
    info: "Extensões em tom marrom para um visual mais natural e suave.",
    description: "O Volume Brown utiliza fios marrons para criar um visual mais natural e suave. Ideal para quem busca um look discreto e elegante. Manutenção de 15 dias: R$120,00. Manutenção de 21 dias: R$140,00.",
    image: "/api/placeholder/300/200"
  },
  {
    id: 4,
    category: "Extensão de Cílios",
    name: "Efeito Sirena",
    price: "R$150,00",
    info: "Extensão no canto externo para um olhar alongado e sedutor.",
    description: "O Efeito Sirena concentra-se no canto externo dos olhos, criando um olhar alongado e sedutor. Perfeito para quem busca um visual dramático. Manutenção até 21 dias: R$130,00.",
    image: "/api/placeholder/300/200"
  },
  {
    id: 5,
    category: "Extensão de Cílios",
    name: "Efeito Molhado",
    price: "R$190,00",
    info: "Cílios com aparência brilhante e úmida para um visual glamouroso.",
    description: "O Efeito Molhado cria a ilusão de cílios naturalmente úmidos e brilhantes. Ideal para um olhar sedutor e fresco, perfeito para o verão ou eventos noturnos. Manutenção de 15 dias: R$120,00. Manutenção de 21 dias: R$140,00.",
    image: "/api/placeholder/300/200"
  },
  {
    id: 6,
    category: "Extensão de Cílios",
    name: "Fox Eyes",
    price: "R$220,00",
    info: "Técnica que eleva o olhar, criando um efeito lifting nos olhos.",
    description: "O Fox Eyes é uma técnica que eleva o olhar, criando um efeito lifting nos olhos. Perfeito para quem busca um visual jovem e moderno. Manutenção de 15 dias: R$130,00. Manutenção de 21 dias: R$150,00.",
    image: "/api/placeholder/300/200"
  },
  {
    id: 7,
    category: "Design de Sobrancelhas",
    name: "Design de Sobrancelhas com Henna",
    price: "R$50,00",
    info: "Design personalizado com aplicação de henna para um efeito duradouro.",
    description: "O Design de Sobrancelhas com Henna inclui higienização, esfoliação, tonificação, design personalizado, aplicação de henna, finalização com gel calmante e pasta mágica. Proporciona um efeito duradouro e natural.",
    image: "/api/placeholder/300/200"
  },
  {
    id: 8,
    category: "Design de Sobrancelhas",
    name: "Design de Sobrancelhas",
    price: "R$40,00",
    info: "Modelagem precisa para realçar sua beleza natural.",
    description: "O Design de Sobrancelhas inclui higienização, esfoliação, tonificação, design personalizado, finalização com gel calmante e pasta mágica. Realça sua beleza natural com uma modelagem precisa.",
    image: "/api/placeholder/300/200"
  }
];

const ServiceCard = ({ service, openModal }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#333333] mb-2">{service.name}</h3>
        <p className="text-[#CD853F] font-bold mb-2">{service.price}</p>
        <p className="text-[#C09C81] text-sm mb-4">{service.info}</p>
        <button
          onClick={() => openModal(service)}
          className="bg-[#CE9D81] text-white py-2 px-4 rounded-full font-semibold text-sm hover:bg-[#c09c81] transition-colors duration-300"
        >
          Mais detalhes
        </button>
      </div>
    </div>
  );
};

const Modal = ({ service, closeModal }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-[#333333] mb-4">{service.name}</h2>
        <p className="text-[#CD853F] font-bold mb-2">{service.price}</p>
        <p className="text-[#C09C81] text-sm mb-4">{service.description}</p>
      </div>
    </div>
  );
};

const ServiceCategory = ({ category, services, openModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-[#f8dbc5] rounded-lg shadow-lg p-4 flex justify-between items-center"
      >
        <h2 className="text-2xl font-bold text-[#333333]">{category}</h2>
        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} openModal={openModal} />
          ))}
        </div>
      )}
    </div>
  );
};

const ThalitaCristinaServicesComponent = () => {
  const [modalService, setModalService] = useState(null);

  const openModal = (service) => {
    setModalService(service);
  };

  const closeModal = () => {
    setModalService(null);
  };

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="bg-[#FFF8F2] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#333333] mb-4">
          Thalita Cristina Studio & Academy
        </h1>
        <p className="text-center text-[#C09C81] mb-12">
          Especialista no embelezamento do Olhar
        </p>
        {categories.map((category) => (
          <ServiceCategory
            key={category}
            category={category}
            services={services.filter(service => service.category === category)}
            openModal={openModal}
          />
        ))}
        <Modal service={modalService} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default ThalitaCristinaServicesComponent;