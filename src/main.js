// Configuración de Phaser
const config = {
    type: Phaser.AUTO,
    width: 800, // Ancho del juego
    height: 600, // Alto del juego
    scale: {
        mode: Phaser.Scale.FIT, // Ajusta el juego para que se ajuste a la pantalla
        autoCenter: Phaser.Scale.CENTER_BOTH // Centra el juego
    },
    scene: {
        preload: preload,
        create: create,
        update: update // Asegúrate de que esto esté aquí
    }
};

const game = new Phaser.Game(config);

// Preload de imágenes
function preload() {
    this.load.image('background', 'Images/pngtree-cartoon-field-children-illustration-background-picture-image_2149728.jpg'); // Cargar la imagen de fondo
}

// Crear el menú principal
function create() {
    // Agregar imagen de fondo
    this.add.image(400, 300, 'background').setScale(1.5);

    // Título del juego
    const title = this.add.text(400, 50, 'Lonely Adventure', {
        font: '48px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5);

    // Botón de Jugar
    const playButton = this.add.text(400, 200, 'Jugar', {
        font: '32px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5).setInteractive();

    playButton.on('pointerover', () => playButton.setStyle({ fill: '#ffcc00' }));
    playButton.on('pointerout', () => playButton.setStyle({ fill: '#ffffff' }));
    playButton.on('pointerdown', () => {
        this.scene.start('levelsScene'); // Cambiar a la escena de niveles
    });

    // Botón de Opciones
    const optionsButton = this.add.text(400, 300, 'Opciones', {
        font: '32px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5).setInteractive();

    optionsButton.on('pointerover', () => optionsButton.setStyle({ fill: '#ffcc00' }));
    optionsButton.on('pointerout', () => optionsButton.setStyle({ fill: '#ffffff' }));
    optionsButton.on('pointerdown', () => {
        this.scene.start('optionsScene'); // Cambiar a la escena de opciones
    });

    // Botón de Multijugador
    const multiplayerButton = this.add.text(400, 400, 'Multijugador', {
        font: '32px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5).setInteractive();

    multiplayerButton.on('pointerover', () => multiplayerButton.setStyle({ fill: '#ffcc00' }));
    multiplayerButton.on('pointerout', () => multiplayerButton.setStyle({ fill: '#ffffff' }));
    multiplayerButton.on('pointerdown', () => {
        this.scene.start('comingSoonScene'); // Cambiar a la escena de "Próximamente"
    });
}

// Crear la escena de niveles
function createLevelsScene() {
    this.add.image(400, 300, 'background').setScale(1.5); // Agregar imagen de fondo

    // Título de Niveles
    const title = this.add.text(400, 50, 'Niveles', {
        font: '48px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5);

    // Botón Nivel 1
    const level1Button = this.add.text(400, 200, 'Nivel 1', {
        font: '32px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5).setInteractive();

    level1Button.on('pointerover', () => level1Button.setStyle({ fill: '#ffcc00' }));
    level1Button.on('pointerout', () => level1Button.setStyle({ fill: '#ffffff' }));
    level1Button.on('pointerdown', () => {
        console.log('Iniciar Nivel 1'); // Aquí puedes agregar la lógica para iniciar el nivel 1
    });

    // Botón Nivel 2
    const level2Button = this.add.text(400, 300, 'Nivel 2', {
        font: '32px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5).setInteractive();

    level2Button.on('pointerover', () => level2Button.setStyle({ fill: '#ffcc00' }));
    level2Button.on('pointerout', () => level2Button.setStyle({ fill: '#ffffff' }));
    level2Button.on('pointerdown', () => {
        console.log('Iniciar Nivel 2'); // Aquí puedes agregar la lógica para iniciar el nivel 2
    });

    // Botón de Regresar al Menú Principal
    const backButton = this.add.text(400, 500, 'Regresar', {
        font: '32px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5).setInteractive();

    backButton.on('pointerover', () => backButton.setStyle({ fill: '#ffcc00' }));
    backButton.on('pointerout', () => backButton.setStyle({ fill: '#ffffff' }));
    backButton.on('pointerdown', () => {
        this.scene.start('mainMenu'); // Cambiar a la escena del menú principal
    });
}

// Crear la escena de "Próximamente"
function createComingSoonScene() {
    this.add.image(400, 300, 'background').setScale(1.5); // Agregar imagen de fondo

    // Mensaje de "Próximamente"
    const message = this.add.text(400, 300, 'Próximamente', {
        font: '48px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5);

    // Botón de Regresar al Menú Principal
    const backButton = this.add.text(400, 500, 'Regresar', {
        font: '32px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5).setInteractive();

    backButton.on('pointerover', () => backButton.setStyle({ fill: '#ffcc00' }));
    backButton.on('pointerout', () => backButton.setStyle({ fill: '#ffffff' }));
    backButton.on('pointerdown', () => {
        this.scene.start('mainMenu'); // Cambiar a la escena del menú principal
    });
}

// Crear la escena de opciones
function createOptionsScene() {
    this.add.image(400, 300, 'background').setScale(1.5); // Agregar imagen de fondo

    // Título de la configuración
    const title = this.add.text(400, 50, 'Configuración', {
        font: '48px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5);

    // Control deslizante de volumen
    const volumeText = this.add.text(250, 150, 'Volumen: ', {
        font: '32px Arial',
        fill: '#ffffff',
    });

    const volumeSlider = this.add.graphics();
    volumeSlider.fillStyle(0x888888, 1);
    volumeSlider.fillRect(250, 200, 300, 10); // Base del slider
    const knob = this.add.graphics();
    knob.fillStyle(0xffcc00, 1);
    knob.fillCircle(250, 205, 15); // Controlador del slider

    // Variables para controlar el volumen
    let volume = 0; // Inicialmente el volumen está en 0
    let knobPosition = 250; // Posición inicial del knob

    // Función para actualizar la posición del knob
    const updateKnob = (x) => {
        const clampedX = Phaser.Math.Clamp(x, 250, 550); // Limitar el rango del slider
        knob.x = clampedX;
        knobPosition = clampedX; // Actualiza la posición del knob
        volume = (clampedX - 250) / 300; // Calcular el volumen entre 0 y 1
        volumeText.setText('Volumen: ' + Math.round(volume * 100) + '%');
    };

    // Eventos para el control deslizante
    knob.setInteractive(new Phaser.Geom.Circle(250, 205, 15), Phaser.Geom.Circle.Contains);
    knob.on('pointerdown', (pointer) => {
        updateKnob(pointer.x); // Actualiza el knob al hacer clic
        this.input.on('pointermove', (pointer) => updateKnob(pointer.x)); // Actualiza mientras se mueve
    });
    knob.on('pointerup', () => {
        this.input.off('pointermove'); // Detener la actualización al soltar el botón
    });

    // Botón de Política de Privacidad
    const privacyButton = this.add.text(400, 300, 'Política de Privacidad', {
        font: '28px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5).setInteractive();

    privacyButton.on('pointerover', () => privacyButton.setStyle({ fill: '#ffcc00' }));
    privacyButton.on('pointerout', () => privacyButton.setStyle({ fill: '#ffffff' }));
    privacyButton.on('pointerdown', () => {
        console.log('Mostrar Política de Privacidad'); // Aquí puedes agregar la lógica para mostrar la política
    });

    // Botón de Idioma
    const languageButton = this.add.text(400, 400, 'Idioma', {
        font: '28px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5).setInteractive();

    languageButton.on('pointerover', () => languageButton.setStyle({ fill: '#ffcc00' }));
    languageButton.on('pointerout', () => languageButton.setStyle({ fill: '#ffffff' }));
    languageButton.on('pointerdown', () => {
        console.log('Cambiar Idioma'); // Aquí puedes agregar la lógica para cambiar el idioma
    });

    // Botón de Regresar al Menú Principal
    const backButton = this.add.text(400, 500, 'Regresar', {
        font: '32px Arial',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
    }).setOrigin(0.5).setInteractive();

    backButton.on('pointerover', () => backButton.setStyle({ fill: '#ffcc00' }));
    backButton.on('pointerout', () => backButton.setStyle({ fill: '#ffffff' }));
    backButton.on('pointerdown', () => {
        this.scene.start('mainMenu'); // Cambiar a la escena del menú principal
    });
}

// Función vacía para el ciclo de actualización
function update() {}

// Agregar la escena de niveles al juego
const levelsScene = {
    preload: preload,
    create: createLevelsScene,
    update: update,
};

// Agregar la escena de niveles
game.scene.add('levelsScene', levelsScene);

// Agregar la escena de "Próximamente"
const comingSoonScene = {
    preload: preload,
    create: createComingSoonScene,
    update: update,
};

// Agregar la escena de "Próximamente"
game.scene.add('comingSoonScene', comingSoonScene);

// Agregar la escena de opciones
const optionsScene = {
    preload: preload,
    create: createOptionsScene,
    update: update,
};

// Agregar la escena de opciones
game.scene.add('optionsScene', optionsScene);

// Agregar el menú principal como una escena
game.scene.add('mainMenu', {
    preload: preload,
    create: create,
    update: update
});
