// Abstract class for creating a factory for various toolkits for various OS
class ToolkitFactory {
    constructor() {
        if (this.constructor === ToolkitFactory) {
            throw new Error("Cannot instantiate abstract class!");
        }
    }
    createTaskManager() {
        throw new Error("This method must be overwritten!");
    }
    createDiskManager() {
        throw new Error("This method must be overwritten!");
    }
    createNetworkManager() {
        throw new Error("This method must be overwritten!");
    }
}

// Concrete class for creating a factory for a Windows toolkit
class WindowsToolkitFactory extends ToolkitFactory {
    createTaskManager() {
        return new WindowsTaskManager();
    }
    createDiskManager() {
        return new WindowsDiskManager();
    }
    createNetworkManager() {
        return new WindowsNetworkManager();
    }
}

// Concrete class for creating a factory for a Linux toolkit
class LinuxToolkitFactory extends ToolkitFactory {
    createTaskManager() {
        return new LinuxTaskManager();
    }
    createDiskManager() {
        return new LinuxDiskManager();
    }
    createNetworkManager() {
        return new LinuxNetworkManager();
    }
}

// Abstract class for a TaskManager
class TaskManager {
    constructor() {
        if (this.constructor === TaskManager) {
            throw new Error("Cannot instantiate abstract class!");
        }
    }
    list() {
        throw new Error("This method must be overwritten!");
    }
    start() {
        throw new Error("This method must be overwritten!");
    }
    stop() {
        throw new Error("This method must be overwritten!");
    }
}

// Concrete class for a Windows TaskManager
class WindowsTaskManager extends TaskManager {
    list() {
        console.log("Listing Windows tasks...");
    }
    start() {
        console.log("Starting Windows task...");
    }
    stop() {
        console.log("Stopping Windows task...");
    }
}

// Concrete class for a Linux
class LinuxTaskManager extends TaskManager {
    list() {
        console.log("Listing Linux tasks...");
    }
    start() {
        console.log("Starting Linux task...");
    }
    stop() {
        console.log("Stopping Linux task...");
    }
}

// Abstract class for a DiskManager
class DiskManager {
    constructor() {
        if (this.constructor === DiskManager) {
            throw new Error("Cannot instantiate abstract class!");
        }
    }
    list() {
        throw new Error("This method must be overwritten!");
    }
    format() {
        throw new Error("This method must be overwritten!");
    }
}

// Concrete class for a Windows DiskManager
class WindowsDiskManager extends DiskManager {
    list() {
        console.log("Listing Windows disks...");
    }
    format() {
        console.log("Formatting Windows disk...");
    }
}

// Concrete class for a Linux
class LinuxDiskManager extends DiskManager {
    list() {
        console.log("Listing Linux disks...");
    }
    format() {
        console.log("Formatting Linux disk...");
    }
}

// Abstract class for a NetworkManager
class NetworkManager {
    constructor() {
        if (this.constructor === NetworkManager) {
            throw new Error("Cannot instantiate abstract class!");
        }
    }
    list() {
        throw new Error("This method must be overwritten!");
    }
    connect() {
        throw new Error("This method must be overwritten!");
    }
    disconnect() {
        throw new Error("This method must be overwritten!");
    }
}

// Concrete class for a Windows NetworkManager
class WindowsNetworkManager extends NetworkManager {
    list() {
        console.log("Listing Windows networks...");
    }
    connect() {
        console.log("Connecting to Windows network...");
    }
    disconnect() {
        console.log("Disconnecting from Windows network...");
    }
}

// Concrete class for a Linux
class LinuxNetworkManager extends NetworkManager {
    list() {
        console.log("Listing Linux networks...");
    }
    connect() {
        console.log("Connecting to Linux network...");
    }
    disconnect() {
        console.log("Disconnecting from Linux network...");
    }
}

// Client code for returning the correct toolkit factory
function getToolkitFactory(os) {
    if (os === 'Windows') {
        return new WindowsToolkitFactory();
    } else if (os === 'Linux') {
        return new LinuxToolkitFactory();
    } else {
        throw new Error("Unsupported OS");
    }
}

// Client code for using the toolkit factory
function useToolkit(toolkitFactory) {
    const taskManager = toolkitFactory.createTaskManager();
    const diskManager = toolkitFactory.createDiskManager();
    const networkManager = toolkitFactory.createNetworkManager();

    while (1) {
        console.log('1. List tasks');
        console.log('2. Start task');
        console.log('3. Stop task');
        console.log('4. List disks');
        console.log('5. Format disk');
        console.log('6. List networks');
        console.log('7. Connect to network');
        console.log('8. Disconnect from network');
        console.log('9. Exit');
        const choice = prompt('Enter your choice: ');
        switch (choice) {
            case '1':
                taskManager.list();
                break;
            case '2':
                taskManager.start();
                break;
            case '3':
                taskManager.stop();
                break;
            case '4':
                diskManager.list();
                break;
            case '5':
                diskManager.format();
                break;
            case '6':
                networkManager.list();
                break;
            case '7':
                networkManager.connect();
                break;
            case '8':
                networkManager.disconnect();
                break;
            case '9':
                return;
            default:
                console.log('Invalid choice');
        }
    }
}

// Usage
const windowsToolkitFactory = getToolkitFactory('Windows');
useToolkit(windowsToolkitFactory);