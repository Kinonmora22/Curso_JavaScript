class PLC_Variable:
    def __init__(self, endereco):
        self.endereco = endereco
        self._value = "sddfghdfghdfghdgh"
    
    @property
    def value():pass
    
    @value.setter
    def value(self, value):
        
        self._value = value
    
    @value.getter
    def value(self):
        return self._value


class struct:
    def __init__(self, variables):
        self.variables = {}
        self._init_variables(variables)
    
    def _init_variables(self, variables):
        for variable in variables:
            variable_name = variable["name"]
            variable_address = variable["address"]
            
            self.variables[variable_name] = PLC_Variable(variable_address)


Gerais_Struct = struct([
    {"name": "Entrada1", "address": 0}
])

variabel1 = Gerais_Struct.variables["Entrada1"]
variabel1.value = True
buffer = plc.db_read(200, variabel1.endereco, 1)

set_bool(buffer, 0, 0, value)

plc.db_write(buffer, 0)