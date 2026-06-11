let resources = [];

exports.getAllResources = (req, res) => {
  res.json(resources);
};

exports.createResource = (req, res) => {
  const { titre, type } = req.body;

  if (!titre || !type) {
    return res.status(400).json({
      message: "Informations manquantes"
    });
  }

  const resource = {
    id: resources.length + 1,
    titre,
    type
  };

  resources.push(resource);

  res.json({
    message: "Ressource créée ✅",
    resource
  });
};
