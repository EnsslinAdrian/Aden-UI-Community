# Component Reference

## API (Inputs, Outputs, Models) 📥
| Name | Type | Description |
| :--- | :--- | :--- |
| `label` | `input<string>` | The text that is displayed. |
| `value` | `model<any>` | Two-way binding for the value. |
| `changed` | `output<void>` | Fires when an action is completed. |

## State (Signals) 🚦
| Name | Type | Description |
| :--- | :--- | :--- |
| `isOpen` | `boolean` | Controls the visibility of the element. |
| `active` | `boolean` | Internal status for animations. |

## Methods ⚙️
| Method | Description |
| :--- | :--- |
| `trigger()` | Starts the main function of the component. |
| `reset()` | Resets all signals to their initial state. |

## Technical Details 🧠
- **Performance**: Uses `requestAnimationFrame` for smooth 60fps.
- **Cleanup**: Automatic stopping of all processes in `ngOnDestroy`.

