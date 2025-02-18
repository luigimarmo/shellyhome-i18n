export const DeviceTypes: {
    [key: string]: {
        name: string,
        friendly_name: string,
        modes: string[],
        family: string,
        default_icon: string;
        inputs?: number,
        channels?: number,
        relays?: number;
        meters?: number;
        emeters?: number;
        rollers?: number,
        template?: string,
        control_path?: string,
    }
} = {
    'SHPLG-1': {
        name: 'shellyplug',
        friendly_name: 'Plug',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'socket.png',
    },
    'SHPLG-S': {
        name: 'shellyplug-s',
        friendly_name: 'Plug S',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'socket.png',
    },
    'SHPLG-IT1': {
        name: 'shellyplugit',
        friendly_name: 'Plug IT',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'socket.png',
    },
    'SHPLG-UK1': {
        name: 'shellypluguk1',
        friendly_name: 'Plug UK',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'socket.png',
    },
    'SHPLG-AU1': {
        name: 'shellyplugau1',
        friendly_name: 'Plug AU',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'socket.png',
    },
    'SHPLG-U1': {
        name: 'shellyplugu1',
        friendly_name: 'Plug US',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'socket.png',
    },
    'SHPLG2-1': {
        name: 'shellyplug',
        friendly_name: 'Plug',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'socket.png',
    },
    'SHSK-1': {
        name: 'shellysocket',
        friendly_name: 'Socket',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        default_icon: 'socket.png',
    },
    'SHSW-1': {
        name: 'shelly1',
        friendly_name: '1',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        default_icon: 'relay.png',
    },
    'SHSW-PM': {
        name: 'shelly1pm',
        friendly_name: '1 PM',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SHSW-L': {
        name: 'shelly1l',
        friendly_name: '1L',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SHAIR-1': {
        name: 'shellyair',
        friendly_name: 'Air',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SHAIR-2': {
        name: 'shellyairturbo',
        friendly_name: 'Air Turbo',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SHSW-21': {
        name: 'shellyswitch',
        friendly_name: '2',
        family: 'relay',
        modes: ['relay', 'roller'],
        channels: 2,
        meters: 1,
        rollers: 1,
        default_icon: 'relay.png',
    },
    'SHSW-22': {
        name: 'shellyHDpro',
        friendly_name: 'HDPro',
        family: 'relay',
        modes: ['relay'],
        channels: 2,
        meters: 2,
        default_icon: 'relay.png',
    },
    'SHSW-25': {
        name: 'shellyswitch25',
        friendly_name: '25',
        family: 'relay',
        modes: ['relay', 'roller'],
        channels: 2,
        meters: 2,
        rollers: 1,
        default_icon: 'relay.png',
    },
    'SHSW-44': {
        name: 'shelly4pro',
        friendly_name: '4Pro',
        family: 'relay',
        modes: ['relay'],
        channels: 4,
        meters: 4,
        default_icon: 'relay.png',
    },
    'SHEM-1': {
        name: 'shellyemeter',
        friendly_name: 'EM',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SHEM-3': {
        name: 'shellyem3',
        friendly_name: 'EM3',
        family: 'emeter',
        modes: ['emeter'],
        channels: 1,
        emeters: 3,
        relays: 1,
        default_icon: 'relay.png',
    },
    'SHEM': {
        name: 'shellyem',
        friendly_name: 'EM',
        family: 'emeter',
        modes: ['emeter'],
        channels: 2,
        emeters: 2,
        relays: 1,
        default_icon: 'relay.png',
    },
    'SHSEN-1': {
        name: 'shellysense',
        friendly_name: 'Sense',
        family: 'sensor',
        modes: ['sensor'],
        default_icon: 'sensor.png',
        channels: 0,
    },
    'SHGS-1': {
        name: 'shellygas',
        friendly_name: 'Gas',
        family: 'sensor',
        modes: ['sensor'],
        default_icon: 'sensor.png',
        channels: 0,
    },
    'SHSM-01': {
        name: 'shellysmoke',
        friendly_name: 'Smoke',
        family: 'sensor',
        modes: ['sensor'],
        default_icon: 'smoke_sensor.png',
    },
    'SHHT-1': {
        name: 'shellyht',
        friendly_name: 'T&H',
        family: 'sensor',
        modes: ['sensor'],
        default_icon: 'sensor.png',
    },
    'SHDW-1': {
        name: 'shellydw',
        friendly_name: 'Door',
        family: 'sensor',
        modes: ['sensor'],
        default_icon: 'door.png',
    },
    'SHDW-2': {
        name: 'shellydw2',
        friendly_name: 'Door 2',
        family: 'sensor',
        modes: ['sensor'],
        default_icon: 'door.png',
    },
    'SHWT-1': {
        name: 'shellyflood',
        friendly_name: 'Flood',
        family: 'sensor',
        modes: ['sensor'],
        default_icon: 'sensor.png',
    },
    // lights
    'SHCL-255': {
        name: 'shellycolor',
        friendly_name: 'Bulb',
        family: 'light',
        modes: ['color', 'white'],
        template: 'SHCL-255-light',
        channels: 1,
        default_icon: 'light.png',
        control_path: 'light',
    },
    'SHBLB-1': {
        name: 'shellybulb',
        friendly_name: 'Bulb',
        family: 'light',
        modes: ['color', 'white'],
        template: 'SHBLB-1-light',
        channels: 1,
        default_icon: 'light.png',
        control_path: 'light',
    },
    'SHRGBWW-01': {
        name: 'shellyrgbww',
        friendly_name: 'RGBWW',
        family: 'light',
        modes: ['color', 'white'],
        template: 'SHRGBWW-01-light', //Overwrites the default <type>-<mode>
        channels: 1,
        default_icon: 'light.png',
        control_path: 'light',
    },
    'SHRGBW2': {
        name: 'shellyrgbw2',
        friendly_name: 'RGBW 2',
        family: 'light',
        modes: ['color', 'white'],
        channels: 4,
        meters: 4,
        default_icon: 'light.png',
        control_path: 'light',
    },
    'SH2LED-1': {
        name: 'Shelly2LED',
        friendly_name: '2LED',
        family: 'light',
        modes: [],
        template: 'SH2LED-1-light', //Overwrites the default <type>-<mode>
        channels: 2,
        default_icon: 'light.png',
        control_path: 'light' //custom control path, used within control endpoints
    },
    'SHDM-1': {
        name: 'shellydimmer',
        friendly_name: 'DIMMER',
        family: 'light',
        modes: [],
        template: 'SHDM-1-light', //Overwrites the default <type>-<mode>
        channels: 1,
        default_icon: 'light.png',
        control_path: 'light', //custom control path, used within control endpoints
        meters: 1
    },
    'SHDM-2': {
        name: 'shellydimmer2',
        friendly_name: 'DIMMER 2',
        family: 'light',
        modes: [],
        template: 'SHDM-2-light', //Overwrites the default <type>-<mode>
        channels: 1,
        default_icon: 'light.png',
        control_path: 'light', //custom control path, used within control endpoints
        meters: 1
    },
    'SHDIMW-1': {
        name: 'shellydimmerw1',
        friendly_name: 'DIMMER',
        family: 'light',
        modes: [],
        template: 'SHDIMW-1-light', //Overwrites the default <type>-<mode>
        channels: 1,
        default_icon: 'light.png',
        control_path: 'light', //custom control path, used within control endpoints
        meters: 1
    },
    'SHVIN-1': {
        name: 'ShellyVintage',
        friendly_name: 'Vintage',
        family: 'light',
        modes: [],
        template: 'SHVIN-1-light', //Overwrites the default <type>-<mode>
        channels: 1,
        default_icon: 'light.png',
        control_path: 'light' //custom control path, used within control endpoints
    },
    'SHBDUO-1': {
        name: 'ShellyBulbDuo',
        friendly_name: 'Duo',
        family: 'light',
        modes: [],
        template: 'SHBDUO-1-light', //Overwrites the default <type>-<mode>
        channels: 1,
        default_icon: 'light.png',
        control_path: 'light', //custom control path, used within control endpoints
        meters: 1
    },
    'SHCB-1': {
        name: 'shellycolorbulb',
        friendly_name: 'Color Bulb',
        family: 'light',
        modes: ['color', 'white'],
        template: 'SHCB-1-light', //Overwrites the default <type>-<mode>
        channels: 1,
        default_icon: 'light.png',
        control_path: 'light', //custom control path, used within control endpoints
        meters: 1
    },
    'SHBTN-1': {
        name: 'shellybutton1',
        friendly_name: ' Button',
        family: 'inputs_reader',
        modes: [],
        channels: 1,
        template: 'SHBTN-1-inputs_reader', //Overwrites the default <type>-<mode>
        default_icon: 'relay.png',
    },
    'SHBTN-2': {
        name: 'shellybutton1',
        friendly_name: ' Button',
        family: 'inputs_reader',
        modes: [],
        channels: 1,
        template: 'SHBTN-2-inputs_reader', //Overwrites the default <type>-<mode>
        default_icon: 'relay.png',
    },
    'SHIX3-1': {
        name: 'shellyix3',
        friendly_name: 'i3',
        family: 'inputs_reader',
        channels: 3,
        'inputs': 3,
        modes: ['inputs_reader'],
        default_icon: 'relay.png',
    },
    'SHSW-1S': {
        name: 'Shelly Harvia RSS',
        friendly_name: 'Harvia RSS',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        'inputs': 1,
        default_icon: 'relay.png',
    },
    'SHUNI-1': {
        name: 'shellyuni',
        friendly_name: 'Uni',
        family: 'relay',
        modes: ['relay'],
        template: 'SHUNI-1-relay',
        channels: 2,
        meters: 2,
        'inputs': 2,
        default_icon: 'relay.png',
    },
    'SHMOS-01': {
        name: 'shellymotionsensor',
        friendly_name: 'Motion Sensor',
        family: 'sensor',
        modes: ['sensor'],
        default_icon: 'motion.png',
    },
    'SHSPOT-1': {
        name: 'shellyspot',
        friendly_name: 'Spot',
        family: 'sensor',
        modes: ['sensor'],
        default_icon: 'motion.png',
    },
    'SHTRV-01': {
        name: 'shellytrv',
        friendly_name: 'TRV',
        family: 'thermostat',
        modes: ['thermostat'],
        default_icon: 'tmp.png',
    },
    'SHMOS-02': {
        name: 'shellymotion2',
        friendly_name: 'Motion 2',
        family: 'sensor',
        modes: ['sensor'],
        default_icon: 'motion.png',
    },
    //gen2
    undefined: {
        name: 'ShellyPlusOldFirmware',
        friendly_name: 'Unknown',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        default_icon: 'relay.png',
    },
    'SNSW-001X16EU': {
        name: 'ShellyPlus1',
        friendly_name: 'Plus 1',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        default_icon: 'relay.png',
    },
    
    'SNSW-001X15UL': {
        name: 'ShellyPlus1',
        friendly_name: 'Plus 1',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        default_icon: 'relay.png',
    },
    'SNSW-001P16EU': {
        name: 'ShellyPlus1PM',
        friendly_name: 'Plus 1 PM',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SNSW-001P15UL': {
        name: 'ShellyPlus1PM',
        friendly_name: 'Plus 1 PM',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SNSW-002X16EU': {
        name: 'ShellyPlus2',
        friendly_name: 'Plus 2',
        family: 'relay',
        modes: ['relay'],
        channels: 2,
        default_icon: 'relay.png',
    },
    'SNSW-002P16EU': {
        name: 'ShellyPlus2PM',
        friendly_name: 'Plus 2 PM',
        family: 'relay',
        modes: ['relay', 'roller'],
        channels: 2,
        meters: 2,
        rollers: 1,
        default_icon: 'relay.png',
    },
    'SNSW-102P16EU': {
        name: 'ShellyPlus2PM',
        friendly_name: 'Plus 2 PM',
        family: 'relay',
        modes: ['relay', 'roller'],
        channels: 2,
        meters: 2,
        rollers: 1,
        default_icon: 'relay.png',
    },
    'SHPSW04P': {
        name: 'ShellyPro4PM',
        friendly_name: '4Pro',
        family: 'relay',
        modes: ['relay'],
        channels: 4,
        meters: 4,
        default_icon: 'relay.png',
    },
    'SPSW-004PE16EU': {
        name: 'ShellyPro4PM',
        friendly_name: 'Pro 4 PM',
        family: 'relay',
        modes: ['relay'],
        channels: 4,
        meters: 4,
        default_icon: 'relay.png',
    },
    'SPSW-104PE16EU': {
        name: 'ShellyPro4PM',
        friendly_name: 'Pro 4 PM',
        family: 'relay',
        modes: ['relay'],
        channels: 4,
        meters: 4,
        default_icon: 'relay.png',
    },
    'SPSW-001PE16EU': {
        name: 'ShellyPro1PM',
        friendly_name: 'Pro 1 PM',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SPSW-101PE16EU': {
        name: 'ShellyPro1PM',
        friendly_name: 'Pro 1 PM',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SPSW-201PE16EU': {
        name: 'ShellyPro1PM',
        friendly_name: 'Pro 1 PM',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SPSW-001XE16EU': {
        name: 'ShellyPro1',
        friendly_name: 'Pro 1',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        default_icon: 'relay.png',
    },
    'SPSW-101XE16EU': {
        name: 'ShellyPro1',
        friendly_name: 'Pro 1',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        default_icon: 'relay.png',
    },
    'SPSW-201XE16EU': {
        name: 'ShellyPro1',
        friendly_name: 'Pro 1',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        default_icon: 'relay.png',
    },
    'SNSL-0A1X03WWL': {
        name: 'ShellyPlus1L',
        friendly_name: 'Plus 1L',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        default_icon: 'relay.png',
    },
    'SPSW-002PE16EU': {
        name: 'ShellyPro2PM',
        friendly_name: 'Pro 2 PM',
        family: 'relay',
        modes: ['relay', 'roller'],
        channels: 2,
        meters: 2,
        rollers: 1,
        default_icon: 'relay.png',
    },
    'SPSW-102PE16EU': {
        name: 'ShellyPro2PM',
        friendly_name: 'Pro 2 PM',
        family: 'relay',
        modes: ['relay', 'roller'],
        channels: 2,
        meters: 2,
        rollers: 1,
        default_icon: 'relay.png',
    },
    'SPSW-202PE16EU': {
        name: 'ShellyPro2PM',
        friendly_name: 'Pro 2 PM',
        family: 'relay',
        modes: ['relay', 'roller'],
        channels: 2,
        meters: 2,
        rollers: 1,
        default_icon: 'relay.png',
    },
    'SPSW-002XE16EU': {
        name: 'ShellyPro2',
        friendly_name: 'Pro 2',
        family: 'relay',
        modes: ['relay'],
        channels: 2,
        default_icon: 'relay.png',
    },
    'SPSW-102XE16EU': {
        name: 'ShellyPro2',
        friendly_name: 'Pro 2',
        family: 'relay',
        modes: ['relay'],
        channels: 2,
        default_icon: 'relay.png',
    },
    'SPSW-202XE16EU': {
        name: 'ShellyPro2',
        friendly_name: 'Pro 2',
        family: 'relay',
        modes: ['relay'],
        channels: 2,
        default_icon: 'relay.png',
    },
    'SPSW-003XE16EU': {
        name: 'ShellyPro3',
        friendly_name: 'Pro 3',
        family: 'relay',
        modes: ['relay'],
        channels: 3,
        default_icon: 'relay.png',
    },
    'SNSN-0024X': {
        name: 'ShellyPlusI4',
        friendly_name: 'Plus I4',
        family: 'inputs_reader',
        modes: ['inputs_reader'],
        channels: 4,
        default_icon: 'relay.png',
    },
    'SNSN-0D24X': {
        name: 'ShellyPlusI4',
        friendly_name: 'Plus I4 DC',
        family: 'inputs_reader',
        modes: ['inputs_reader'],
        channels: 4,
        default_icon: 'relay.png',
    },
    'SNPL-00116US': {
        name: 'ShellyPlugUS',
        friendly_name: 'Plus Plug US',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SNPL-00116IT': {
        name: 'ShellyPlugIT',
        friendly_name: 'Plus Plug IT 16A',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SNPL-00110IT': {
        name: 'ShellyPlugIT',
        friendly_name: 'Plus Plug IT 10A',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SNPL-00110EU': {
        name: 'ShellyPlusPlugS',
        friendly_name: 'Plus Plug S',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SNPL-00210EU': {
        name: 'ShellyPlusPlugS',
        friendly_name: 'Plus Plug S',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SNPL-00112EU': {
        name: 'ShellyPlusPlugS',
        friendly_name: 'Plus Plug S',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SNPL-00112UK': {
        name: 'ShellyPlusPlugUK',
        friendly_name: 'Plus Plug UK',
        family: 'relay',
        modes: ['relay'],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SNDM-0013US': {
        name: 'ShellyPlusWDUS',
        friendly_name: 'Plus Wall Dimmer',
        family: 'light',
        modes: [],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SNDM-9995WW': {
        name: 'ShellyPlusDimmer',
        friendly_name: 'Plus Dimmer',
        family: 'light',
        modes: [],
        channels: 1,
        meters: 1,
        default_icon: 'relay.png',
    },
    'SNSN-0013A': {
        name: 'ShellyPlusHT',
        friendly_name: 'Plus H&T',
        family: 'sensor',
        modes: ['sensor'],
        channels: 1,
        default_icon: 'relay.png',
    },
    'SNSN-0031Z': {
        name: 'ShellyPlusSmoke',
        friendly_name: 'Plus Smoke',
        family: 'sensor',
        modes: ['sensor'],
        channels: 1,
        default_icon: 'relay.png',
    },
    'SPEM-003CEBEU': {
        name: 'ShellyPro3EM',
        friendly_name: 'Pro 3EM',      
        family: 'emeter',
        modes: ['emeter'],
        channels: 1,
        emeters: 3,
        default_icon: 'relay.png',
    }
    // New Devices??
    /* 'IR_REM-0': {
         name: 'Remote',
         friendly_name: 'Remote',
         family: 'remote',
         modes: [],
         chart: !1,
         control_holder: 0,
         settings: [{
             title: 'not_ready'
         }]
     },
     'IR_REM-1-remote': {
         name: 'Remote',
         friendly_name: 'Remote',
         family: 'remote',
         modes: [],
         chart: !1,
         control_holder: 0,
         settings: [{
             title: 'not_ready'
         }]
     }, */
}
