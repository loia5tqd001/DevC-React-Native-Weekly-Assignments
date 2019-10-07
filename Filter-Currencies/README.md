# Filter Currency Data
Retrieve flag images and other information about some interest currencies.

### **Input**:
- List of interest currency: `./list.txt`
- Flags: `./flags`
- Other information stores in `./Common-Currency.json`: 
```json
// in Common-Currency.json
"USD": {
    "symbol": "$",
    "name": "US Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "USD",
    "name_plural": "US dollars"
}
```

### **Output**: filtered data stores in:  
- `./result/list-currencies.json`
- `./result/info-currencies.json`
- `./result/flags/`

### **Resources**:
- https://github.com/transferwise/currency-flags
- https://gist.github.com/Fluidbyte/2973986