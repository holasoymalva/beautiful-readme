import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { FileText, Download } from 'lucide-react';

const BeautifulReadme = () => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    installation: '',
    usage: '',
    features: '',
    contributing: '',
    license: 'MIT',
  });

  const [activeTab, setActiveTab] = useState('editor');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateMarkdown = () => {
    return `# ${projectData.title}\n\n${projectData.description}\n\n## 🚀 Características principales\n\n${projectData.features}\n\n## 📋 Pre-requisitos e Instalación\n\n\`\`\`bash\n${projectData.installation}\n\`\`\`\n\n## 🔧 Uso\n\n${projectData.usage}\n\n## 🤝 Contribuir\n\n${projectData.contributing}\n\n## 📝 Licencia\n\nEste proyecto está bajo la Licencia ${projectData.license}`;
  };

  const downloadReadme = () => {
    const markdown = generateMarkdown();
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-6 h-6" />
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Beautiful README Generator</h1>
            </div>

            <div className="mb-6">
              <div className="inline-flex rounded-lg bg-gray-100 p-0.5">
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'editor'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab('editor')}
                >
                  Editor
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'preview'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab('preview')}
                >
                  Vista previa
                </button>
              </div>
            </div>

            {activeTab === 'editor' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Título del Proyecto
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="input-styles"
                    value={projectData.title}
                    onChange={handleInputChange}
                    placeholder="Mi Proyecto Asombroso"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Descripción
                  </label>
                  <textarea
                    name="description"
                    className="input-styles min-h-[100px]"
                    value={projectData.description}
                    onChange={handleInputChange}
                    placeholder="Una breve descripción de tu proyecto..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Características
                  </label>
                  <textarea
                    name="features"
                    className="input-styles min-h-[120px]"
                    value={projectData.features}
                    onChange={handleInputChange}
                    placeholder="- Característica 1&#10;- Característica 2&#10;- Característica 3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Instalación
                  </label>
                  <textarea
                    name="installation"
                    className="input-styles font-mono text-sm min-h-[80px]"
                    value={projectData.installation}
                    onChange={handleInputChange}
                    placeholder="npm install mi-proyecto"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Uso
                  </label>
                  <textarea
                    name="usage"
                    className="input-styles min-h-[100px]"
                    value={projectData.usage}
                    onChange={handleInputChange}
                    placeholder="Describe cómo usar tu proyecto..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contribuir
                  </label>
                  <textarea
                    name="contributing"
                    className="input-styles min-h-[100px]"
                    value={projectData.contributing}
                    onChange={handleInputChange}
                    placeholder="Instrucciones para contribuir al proyecto..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Licencia
                  </label>
                  <input
                    type="text"
                    name="license"
                    className="input-styles"
                    value={projectData.license}
                    onChange={handleInputChange}
                    placeholder="MIT"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 overflow-auto">
                  {generateMarkdown()}
                </pre>
              </div>
            )}

            <div className="mt-6">
              <Button
                onClick={downloadReadme}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Descargar README.md
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BeautifulReadme;