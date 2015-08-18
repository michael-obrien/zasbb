// infrastructure

exports.root = {
  type: 'blank-container'
};

exports.dir = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/michael-obrien/zasbb-dir.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 10101:10101 -d',
      process: 'directory.js'
    }
  }
};


exports.mpost = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/michael-obrien/zasbb-makepost.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 10102:10102 -d',
      process: 'makepost.js'
    }
  }
};

exports.gthread = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/michael-obrien/zasbb-getthread.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 10103:10103 -d',
      process: 'getthread.js'
    }
  }
};

exports.glayout = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/michael-obrien/zasbb-getlayout.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 10104:10104 -d',
      process: 'getlayout.js'
    }
  }
};

exports.gtlist = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/michael-obrien/zasbb-getthreadlist.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 10105:10105 -d',
      process: 'getthreadlist.js'
    }
  }
};

exports.gnews = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/michael-obrien/zasbb-getnews.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 10109:10109 -d',
      process: 'getnews.js'
    }
  }
};

exports.web = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/michael-obrien/zasbb-server.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 3000:3000 -d',
      process: 'server.js'
    }
  }
};

//exports.web = {
//  type: 'docker',
//  override: {
//    process: {
//      type: 'process'
//    }
//  },
//  specific: {
//    repositoryUrl: 'https://github.com/nearform/sudc-web.git',
//    processBuild: 'npm install; cd web; npm install; npm install bower; node_modules/.bin/bower install',
//    ignored: ['.build'],
//    execute: {
//      args: '-p 3000:3000 -d',
//      process: './index.js',
//      cwd: 'web'
//    }
//  }
//};
