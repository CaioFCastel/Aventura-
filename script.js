document.addEventListener('DOMContentLoaded', function() {
    const choices = document.querySelectorAll('.choice-btn');
    const tenseScenes = ['scene-2', 'scene-3', 'scene-6', 'scene-7', 'scene-8'];
    
    choices.forEach(choice => {
        choice.addEventListener('click', function() {
            // Esconde todas as cenas e remove efeitos
            document.querySelectorAll('.scene').forEach(scene => {
                scene.classList.remove('active', 'tense');
            });
            
            // Mostra próxima cena
            const nextSceneId = 'scene-' + this.getAttribute('data-next');
            const nextScene = document.getElementById(nextSceneId);
            nextScene.classList.add('active');
            
            // Adiciona efeito de tremer se for cena de tensão
            if(tenseScenes.includes(nextSceneId)) {
                nextScene.classList.add('tense');
            }
            
            // Rolagem suave para o topo
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});
