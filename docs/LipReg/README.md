# Data Continuity Matters: Improving Sequence Modeling with Lipschitz Regularizer

This website provides the official implementation of the Lipschitz Regularizer from the following paper.

**Data Continuity Matters: Improving Sequence Modeling with Lipschitz Regularizer**\
Eric Qu, Xufang Luo, Dongsheng Li\
International Conference on Learning Representations, 2023. Notable top-25% (Spotlight).\
Paper: [https://openreview.net/forum?id=27uBgHuoSQ](https://openreview.net/forum?id=27uBgHuoSQ)

## Code Download

Link: [Code.zip]()

## Usage

The aim of the Lipschitz Regularizer is to alter the continuity of the input sequence for sequence models during training. It is often applied after the embedding layer. The Lipschitz Regularizer can be calculated with the following function (works in PyTorch):

```python
def LipReg(x0, transpose = True, normalize = True):
	"""
	x0: (B H L) if transposed else (B L H)

	Returns: 
	the Lipschitz Regularizer, a scaler
	"""
	if not transpose:
		x0 = x0.transpose(-1, -2)
	if normalize:
		x = (x0 - x0.min()) / x0.max()
	else:
		x = x0
	return torch.square(x[..., 1:] - x[..., :-1]).mean(dim = -1).mean()
```

The normal way to use this regularizer is to calculate and return it in `forward` function in the model, and add it in the loss during training. Here is a pseudocode example:

```python
class SomeModel(nn.Module):
	def __init__(...):
		...

	def forward(self, x):
		h = self.embd(x) # calculate the embedding
		lip = LipReg(h)  # calculate the regularizer
		...
		return output, lip

...

def train(...):
	for data, label in loader:
		output, lip = model(data)

		loss = lossfn(output, label) +/- lam * lip 
		# +: make input continuous; -: make input discrete

		...
```

### Example Usage

We provide an example usage with [Informer](https://github.com/zhouhaoyi/Informer2020) in `Code/Informer + LipReg/`.

## Citation

If you use this code, or otherwise found our work valuable, please cite:

```latex
@inproceedings{
	qu2023data,
	title={Data Continuity Matters: Improving Sequence Modeling with Lipschitz Regularizer},
	author={Eric Qu and Xufang Luo and Dongsheng Li},
	booktitle={International Conference on Learning Representations},
	year={2023},
	url={https://openreview.net/forum?id=27uBgHuoSQ}
}
```
