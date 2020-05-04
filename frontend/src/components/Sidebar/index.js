import React, { useEffect, useState } from 'react';

import Bin from './bin';

function Sidebar({ bins }) {
  const [levelBins, setLevelBins] = useState([]);

  useEffect(() => {
    bins.sort((a, b) => b.level - a.level);
    bins = bins.filter((bin) => !(bin.level < 30));
    setLevelBins(bins);
  }, [bins]);

  return (
    <div className="sidebar">
      <h1>High Level Bins</h1>
      <div className="bins">
        {levelBins.map((bin) => (
          <Bin key={bin.id} bin={bin} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
