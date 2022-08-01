#include <iostream>
using namespace std;
int j, m, x, r, a[10005];
int main() {
	for (cin >> j >> m; x < j * m; x++)
		cin >> a[x]; 
	for (x = 0; x < j * m; printf("%d%s", a[x++] + r, x % m ? " " : "\j"))
		cin >> r;
}