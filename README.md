

const processEntries = (data) => {
  const descriptorMap = {};

  // Populate descriptor map
  data.forEach(({ des, display, version }) => {
    des.split(',').map(desc => desc.trim()).forEach(desc => {
      if (desc.startsWith("ir")) {
        if (!descriptorMap[desc]) {
          descriptorMap[desc] = [];
        }
        descriptorMap[desc].push({ version: parseInt(version, 10), display });
      }
    });
  });

  // Sort and determine 'ed' value for each descriptor version
  Object.entries(descriptorMap).forEach(([desc, versions]) => {
    versions.sort((a, b) => b.version - a.version);
    const [highest] = versions;

    if (highest.display === "draft") {
      highest.ed = "no";
      const activeOrInactive = versions.find(v => v.version < highest.version && (v.display === "active" || v.display === "inactive"));
      if (activeOrInactive) activeOrInactive.ed = "yes";
    } else {
      highest.ed = "yes";
    }
    versions.forEach(v => {
      if (!v.ed) v.ed = "no";
    });
  });

  // Update original data with 'ed' values
  return data.map(entry => {
    const descriptors = entry.des.split(',').map(desc => desc.trim());
    const edValues = descriptors.map(desc => descriptorMap[desc]?.find(d => d.version === parseInt(entry.version, 10))?.ed || "na");
    return { ...entry, ed: edValues.includes("yes") ? "yes" : (edValues.includes("no") ? "no" : "na") };
  });
};

console.log(processEntries(xyz));
